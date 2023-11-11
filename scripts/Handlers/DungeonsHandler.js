class Dungeon {
    constructor(id, posX, posY, name, enchant1) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.name = name;
        this.enchant = enchant1;

        if (name.toLowerCase().includes("solo")) {
            this.type = 0;
        } else {
            this.type = 1;
        }
        this.hY = 0;
        this.hX = 0;

    }
}

class DungeonsHandler {
    constructor() {
        this.dungeonList = [];
    }

    addDungeon(id, posX, posY, name, enchant) {
        const d = new Dungeon(id, posX, posY, name, enchant);

        if (!this.dungeonList.some(item => item.Id === d.Id)) {
            this.dungeonList.push(d);
        }
    }

    removeMob(id) {
        this.dungeonList = this.dungeonList.filter(item => item.Id !== id);

    }

    updateMobPosition(id, posX, posY) {
        this.dungeonList.forEach(p => {
            if (p.Id === id) {
                p.PosX = posX;
                p.PosY = posY;
            }
        });
    }

    dungeonEvent(parameters) {
        const id = parameters[0];
        const position = parameters[1];
        const name = parameters[3];
  
        const enchant =  +parameters[5];
        this.addDungeon(id, position[0], position[1], name, enchant);
    }

    updateMobEnchantmentLevel(mobId, enchantmentLevel) {
        const mob = this.dungeonList.find(x => x.Id === mobId);
        if (mob) {
            mob.Enchant = enchantmentLevel;
        }
    }


}