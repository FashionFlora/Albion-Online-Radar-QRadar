class Harvestable {
    constructor(id, type, tier, posX, posY, charges, size) {
        this.id = id;
        this.type = type;
        this.tier = tier;
        this.posX = posX;
        this.posY = posY;
        this.hX = 0;
        this.hY = 0;

        this.charges = charges;
        this.size = size;
    }

    setCharges(charges) {
        this.charges = charges;
    }
}

class HarvestablesHandler {
    constructor() {
        this.harvestableList = [];
    }

    addHarvestable(id, type, tier, posX, posY, charges, size) {
   
            const h = new Harvestable(id, type, tier, posX, posY, charges, size);
            const index = this.harvestableList.findIndex((item) => item.id === h.id);

            if (index === -1) {
                this.harvestableList.push(h);
                // console.log("New Harvestable: " + h.toString());
            } else {
                this.harvestableList[index].setCharges(charges);
            }
  
    }

    harvestFinished( Parameters) {

        const id = Parameters[3];
        const count = Parameters[5];

        this.updateHarvestable(id, count);

    }

    newHarvestableObject(id, Parameters) {

        const type = Parameters[5];
        const tier = Parameters[7];
        const location =Parameters[8];

        let enchant = 0;
        let size = 0;

        try {
            size = Parameters[10];
        } catch (ignored) { }

        try {
            enchant = Parameters[11];
        } catch (ignored) { }

        this.addHarvestable(id, type, tier, location[0], location[1], enchant, size);

    }

     base64ToArrayBuffer(base64) {
        var binaryString = atob(base64);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    newSimpleHarvestableObject(Parameters) {
        const a0 = Parameters[0];

        if (a0.length === 0) {
            return;
        }

   
        const a1 = Parameters[1]["data"];
        const a2 = Parameters[2]["data"];
 
        const a3 = Parameters[3];
        const a4 = Parameters[4]["data"];

        for (let i = 0; i < a0.length; i++) {
            const id = a0[i];
            const type = a1[i];
            const tier = a2[i];
            const posX = a3[i * 2];
            const posY = a3[i * 2 + 1];
            const count = a4[i];

            this.addHarvestable(id, type, tier, posX, posY, 0, count);
        }
   
    }

    removeNotInRange(lpX, lpY) {
   
            this.harvestableList = this.harvestableList.filter(
                (x) => this.calculateDistance(lpX, lpY, x.posX, x.posY) <= 80
        );
        this.harvestableList = this.harvestableList.filter(item => item.size !== undefined);
   
    }

    calculateDistance(lpX, lpY, posX, posY) {
        const deltaX = lpX - posX;
        const deltaY = lpY - posY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        return distance;
    }

    removeHarvestable(id) {
   
            this.harvestableList = this.harvestableList.filter((x) => x.id !== id);
   
    }

    getHarvestableList() {


            return [...this.harvestableList];
   
    }

    updateHarvestable(harvestableId, count) {
   
    
            const harvestable = this.harvestableList.find((h) => h.id == harvestableId);

        if (harvestable) {

                  harvestable.size = harvestable.size - count;
         
            }
     
    }

    clear() {
  
            this.harvestableList = [];

    }
}