class Mob {
    constructor(id, typeId, posX, posY, health, enchantmentLevel, rarity) {
        this.id = id;
        this.typeId = typeId;
        this.posX = posX;
        this.posY = posY;
        this.health = health;
        this.enchantmentLevel = enchantmentLevel;
        this.rarity = rarity;
        this.tier = 0;
        this.type = 2;
        this.name = null;
        this.exp = 0;
        this.hX = 0;
        this.hY = 0;

    }
}

class Mist {
    constructor(id, posX, posY, name, enchant) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.name = name;
        this.enchant = enchant;
        this.hX = 0;
        this.hY = 0;

        if (name.toLowerCase().includes("solo")) {
            this.type = 0;
        } else {
            this.type = 1;
        }
    }
}









class MobsHandler {
    constructor() {
        this.mobsList = [];
        this.mistList = [];
        this.mobinfo = {};

    }
    updateMobInfo(newData) {
        this.mobinfo = newData;
    }

    clear() {


        this.mobsList = [];
        this.mistList = [];
      
    }

    NewMobEvent(parameters) {
        const id = parseInt(parameters[0]);
        let typeId = parseInt(parameters[1]);



        const loc = parameters[7];
        let posX = loc[0];
        let posY = loc[1];

        let exp = 0

        try {
            exp = parseFloat(parameters[13]);
        } catch (error) {
            exp = 0;
        }

        let name = null;
        try {
            name = parameters[32];
        } catch (error) {
            name = null;
        }

        let enchant = null;
        try {
            enchant = parameters[33];
        } catch (error) {
            enchant = null;
        }

        if (name == null) {
            try {
                name = parameters[31];
            } catch (error) {
                name = null;
            }
        }

        let rarity = 1;

        try {
            rarity = parseInt(parameters[19]);
        } catch (error) {
            rarity = 1;
        }

        if (name != null ) {
            this.addMist(id, posX, posY, name, enchant);
        }
        else {
            this.addMob(id, typeId, posX, posY, exp, 0, rarity, exp);
        }
    

    }
    

    addMob(id, typeId, posX, posY, health, enchant, rarity) {
  
            const h = new Mob(id, typeId, posX, posY, health, enchant, rarity);

            if (this.mobinfo[typeId]!=null) {
                const mobsInfo = this.mobinfo[typeId];
               
                h.tier = mobsInfo[0];
                h.type = mobsInfo[1];
                h.name = mobsInfo[2];
            }

            if (!this.mobsList.includes(h)) {
                this.mobsList.push(h);
            }
     
    }

    addMist(id, posX, posY, name, enchant) {
        const d = new Mist(id, posX, posY, name, enchant);

        if (!this.mistList.some(mist => mist.id === d.id)) {
            this.mistList.push(d);
        }
    }

    removeMist(id) {
 
        this.mistList = this.mistList.filter(mist => mist.id !== id);

    }


    updateMistPosition(id, posX, posY) {
        this.mistList.forEach(mist => {
            if (mist.id === id) {
                mist.posX = posX;
                mist.posY = posY;
            }
        });
    }

    updateMistEnchantmentLevel(mistId, enchantmentLevel) {
        const mistToUpdate = this.mistList.find(mist => mist.id === mistId);
        if (mistToUpdate) {
            mistToUpdate.enchant = enchantmentLevel;
        }
    }


    updateMobEnchantmentLevel(mobId, enchantmentLevel) {


        for (const mob of this.mobsList) {
            if (mob.id === mobId) {
                mob.enchantmentLevel = enchantmentLevel;

                break;
            }
        }

    }
    updateEnchantEvent(parameters) {
    const mobId = parameters[0];
    const enchantmentLevel = parameters[1];
    this.updateMobEnchantmentLevel(mobId, enchantmentLevel);
    }


    removeMob(id) {

            this.mobsList = this.mobsList.filter((x) => x.id !== id);
     
        
    }

    getMobList() {
       
         return [...this.mobsList];
    
    }

    updateMobPosition(id, posX, posY) {
   
            for (const mob of this.mobsList) {
                if (mob.id === id) {
                    mob.posX = posX;
                    mob.posY = posY;
                    break;
                }
            }
      
    }

}
