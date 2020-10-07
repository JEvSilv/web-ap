class Word {
    carry:number;
    data:number;
    tag:boolean;
    constructor(carry:number, data:number, tag:boolean) {
        this.carry = carry;
        this.data  = data;
        this.tag   = tag;
    }
}

class Pass {
    A:boolean;
    B:boolean;
    Cr:boolean;
    wC:boolean;
    wCr:boolean;
    constructor(Cr:boolean, A:boolean, B:boolean, wCr:boolean, wC:boolean) {
        this.A   = A;
        this.B   = B;
        this.Cr  = Cr;
        this.wC  = wC
        this.wCr = wCr;
    }
}

export class AP {
    mem: Array<Word> = [];
    lookup_table_add: Array<Pass> = [];
    mask_A: number;
    mask_B:number;
    mask_Cr: number
    key_A: number;
    key_B: number;
    key_Cr:number;

    constructor(size: number) {

        for(let i:number = 0; i < size; i++)
            this.mem.push(new Word(0,0, false));
        
        this.init_lookup_add();
        this.init_special_regs();
    }

    init_lookup_add() {
        this.lookup_table_add.push(new Pass(false,true,true,true,false));
        //this.lookup_table_add.push(new Pass(false,false,true,false,true));
        this.lookup_table_add.push(new Pass(false,true,false,false,true));// adding pass, no necessary
        this.lookup_table_add.push(new Pass(true,false,false,false,true));
        this.lookup_table_add.push(new Pass(true,true,false,true,false));
    }

    init_special_regs() {
       this.mask_A = 0;
       this.mask_B = 0;
       this.mask_Cr = 0;
       this.key_A  = 0;
       this.key_B  = 0;
       this.key_Cr = 0;
    }

    
}

export class Simulator {
    ap:AP;
    trace:   Array<object> = [];
    operands:object = {};
    bits:number    = undefined;
    qtd_ops:number = undefined;
    mem_size:number = undefined;
    pass_add_qtd:number = undefined;

    constructor(operands:object, bits:number, qtd_ops:number) {
        this.operands = operands;
        this.bits     = bits;
        
        this.qtd_ops  = qtd_ops;
        this.mem_size = qtd_ops*2;
        this.ap = new AP(this.mem_size);

        for(let i:number = 0; i < this.qtd_ops; i++)            {
            let base = i*2;
            this.ap.mem[base].data = this.operands['A'+i];
            this.ap.mem[base+1].data = this.operands['B'+i];
        }
        this.pass_add_qtd = 4;
        //console.log(this);
    }
    
    set_mask(bit:number) {
        this.ap.mask_A = 1 << bit;
        this.ap.mask_B = 1 << bit;
        this.ap.mask_Cr = 1;
    }

    set_key(pass:number, bit:number) {  
        let set_bit:number = 1 << bit;
        this.ap.key_A  = 0;
        this.ap.key_B  = 0;
        this.ap.key_Cr = 0;

        if(this.ap.lookup_table_add[pass].A) {
            this.ap.key_A |= set_bit;
        }

        if(this.ap.lookup_table_add[pass].B) {
            this.ap.key_B |= set_bit;
        }

        if(this.ap.lookup_table_add[pass].Cr) {
            this.ap.key_Cr = 1;
        }
    }

    compare(base:number) {
        let C = base + 1; //Changed for B = B + A : 1 = B e 2 = C
        let A_masked = this.ap.mem[base].data & this.ap.mask_A;
        let B_masked = this.ap.mem[base+1].data & this.ap.mask_B;
        let A_res    = this.ap.key_A ^ A_masked;
        let B_res    = this.ap.key_B ^ B_masked;
        //console.log(this.ap.mem, this.ap.mask_A, this.ap.mask_B, this.ap.key_A,this.ap.key_B, A_masked, B_masked);
        if(A_res == 0 && B_res == 0 && this.ap.mem[C].carry == this.ap.key_Cr)
        {
            //console.log("Entrou! Match!");
            this.ap.mem[C].tag = true;
        }

    }

    write(pass:number, base:number, bit:number){
        let set_bit = 1 << bit;
        let C = base+1;
        if(this.ap.mem[C].tag) {

            this.ap.lookup_table_add[pass].wCr ? this.ap.mem[C].carry = 1 : this.ap.mem[C].carry = 0;

            this.ap.lookup_table_add[pass].wC ? this.ap.mem[C].data |= set_bit : this.ap.mem[C].data &= ~(set_bit);
            //            console.log("Escrevendo", this.ap.mem);
        }

        this.ap.mem[C].tag = false;
    }

    num_to_bin(n:any) {
        switch(typeof n) {
            case "boolean":
                if(n){return "1";}else{return; 0;}
                break;
            case "number":
                let bin = n.toString(2);
                while(this.bits > bin.length){ bin = "0" + bin }
                return bin.slice(0,this.bits);
                break;
            default:
                break;
        }

        return null;
    }

    tracing() {
        let mem_bin = [];

        this.ap.mem.map((e) =>{
            mem_bin.push({
                carry:+e.carry,
                data: this.num_to_bin(e.data),
                tag: +e.tag
            })
        });

        this.trace.push({
            "mask":this.ap.mask_Cr.toString() + " " + this.num_to_bin(this.ap.mask_A) + " " + this.num_to_bin(this.ap.mask_B),
            "key":this.ap.key_Cr.toString() + " " + this.num_to_bin(this.ap.key_A) + " " + this.num_to_bin(this.ap.key_B),
                    mem:mem_bin
            });
    }

    add() {
       this.ap.mask_A = 0;
       this.ap.mask_B = 0;
       this.ap.mask_Cr = 0;
       this.ap.key_A  = 0;
       this.ap.key_B  = 0;
       this.ap.key_Cr = 0;       
      
       for(let bit:number = 0; bit < this.bits; bit++) {
           for(let pass:number = 0; pass < this.pass_add_qtd; pass++) {
               for(let i:number = 0; i < this.qtd_ops; i++) {
                   let base = i * 2;
                   this.set_mask(bit);
                   this.set_key(pass, bit);
                   this.compare(base);
                   this.tracing();
                   this.write(pass, base, bit);

               }
           } 
       }
        //        console.log(this.trace);
    }
}
