
class Settings {

   

    constructor() {

        
        this.images = {};


        this.settingDot = false;
        this.settingNickname = false;
        this.settingHealth = false;
        this.settingMounted = false;
        this.settingItems = false;
        this.settingItemsDev = false;
        this.settingDistance = false;
        this.settingGuild = false;
        this.scale = 4.0;
        this.settingSound = false;

        this.ignoreList = [];

        this.harvestingTiers = [false, false, false, false, false, false, false, false];
        this.harvestingEnchants = [false, false, false, false, false,false];
        this.mobEnchants = [false, false, false, false, false];
        this.mobTiers = [false, false, false, false, false, false, false, false];
        this.mistEnchants = [false, false, false, false, false];
        this.dungeonEnchants = [false, false, false, false, false];

        this.dungeonSolo = false;
        this.dungeonDuo = false;
        this.mistSolo = false;
        this.mistDuo = false;

        this.mobHp = false;

        this.mobOther = false;
        this.mobSkinnable = false;
        this.mobHarvestable = false;
        this.mobBoss = false;
        this.mobDevMode = false;


        this.harvestingFiber = false;
        this.harvestingWood = false;
        this.harvestingHide = false;
        this.harvestingOre = false;
        this.harvestingRock = false;
        this.harvestingSize = false;
        this.drones = false;


        this.chestGreen = false;
        this.chestBlue = false;
        this.chestPurple = false;
        this.chestYellow = false;

        
    }
    preloadImageAndAddToList(path) {
        return new Promise((resolve, reject) => {
            if (this.images[path]) {
            
                resolve();
            } else {
                const img = new Image();
                img.src = path;
                img.onload = () => {
                    this.images[path] = img; 
                    resolve();
                };
            }
        });
    }

    returnLocalBool(item) {
        if (localStorage.getItem(item) == "true") {
            return true;
        }
        else {
            return false;
        }


    }

    update() {
   
        this.settingDot = this.returnLocalBool("settingDot");
        this.settingNickname = this.returnLocalBool("settingNickname");
        


        this.settingHealth = this.returnLocalBool("settingHealth");
        this.settingMounted = this.returnLocalBool("settingMounted");

        this.settingItems = this.returnLocalBool("settingItems");
        this.settingItemsDev = this.returnLocalBool("settingItemsDev");


        this.settingDistance = this.returnLocalBool("settingDistance");
        this.settingGuild = this.returnLocalBool("settingGuild");
        this.settingSound = this.returnLocalBool("settingSound");
        this.harvestingTiers[0] = this.returnLocalBool("settingRawT1");
        this.harvestingTiers[1] = this.returnLocalBool("settingRawT2");
        this.harvestingTiers[2] = this.returnLocalBool("settingRawT3");
        this.harvestingTiers[3] = this.returnLocalBool("settingRawT4");
        this.harvestingTiers[4] = this.returnLocalBool("settingRawT5");
        this.harvestingTiers[5] = this.returnLocalBool("settingRawT6");
        this.harvestingTiers[6] = this.returnLocalBool("settingRawT7");
        this.harvestingTiers[7] = this.returnLocalBool("settingRawT8");

        this.harvestingEnchants[0] = this.returnLocalBool("settingRawE0");
        this.harvestingEnchants[1] = this.returnLocalBool("settingRawE1");
        this.harvestingEnchants[2] = this.returnLocalBool("settingRawE2");
        this.harvestingEnchants[3] = this.returnLocalBool("settingRawE3");
        this.harvestingEnchants[4] = this.returnLocalBool("settingRawE4");

        this.harvestingFiber = this.returnLocalBool("settingRawFiber");
        this.harvestingRock = this.returnLocalBool( "settingRawRock");
        this.harvestingOre = this.returnLocalBool(  "settingRawOre" );
        this.harvestingHide = this.returnLocalBool( "settingRawHide");
        this.harvestingWood = this.returnLocalBool("settingRawWood");
        
        this.harvestingSize = this.returnLocalBool("settingRawSize");
        this.mobDevMode = this.returnLocalBool("settingMobDevMode");



        this.mobTiers[0] = this.returnLocalBool("settingMobT1");
        this.mobTiers[1] = this.returnLocalBool("settingMobT2");
        this.mobTiers[2] = this.returnLocalBool("settingMobT3");
        this.mobTiers[3] = this.returnLocalBool("settingMobT4");
        this.mobTiers[4] = this.returnLocalBool("settingMobT5");
        this.mobTiers[5] = this.returnLocalBool("settingMobT6");
        this.mobTiers[6] = this.returnLocalBool("settingMobT7");
        this.mobTiers[7] = this.returnLocalBool("settingMobT8");

        this.mobEnchants[0] = this.returnLocalBool("settingMobE0");
        this.mobEnchants[1] = this.returnLocalBool("settingMobE1");
        this.mobEnchants[2] = this.returnLocalBool("settingMobE2");
        this.mobEnchants[3] = this.returnLocalBool("settingMobE3");
        this.mobEnchants[4] = this.returnLocalBool("settingMobE4");

        this.mobHp = this.returnLocalBool("settingMobShowHp");
        this.mobHarvestable = this.returnLocalBool("settingMobHarvestable");
        this.mobOther = this.returnLocalBool("settingMobOther");
        this.mobSkinnable = this.returnLocalBool("settingMobSkinnable");

        this.mobBoss = this.returnLocalBool("settingBossesOtherBosses");
        this.drones = this.returnLocalBool("settingBossesAvaloneDrones");

        
       
        this.chestGreen = this.returnLocalBool("settingChestGreen");
        this.chestBlue = this.returnLocalBool("settingChestBlue");
        this.chestPurple = this.returnLocalBool("settingChestPurple");
        this.chestYellow = this.returnLocalBool("settingChestYellow");

        this.mistSolo = this.returnLocalBool("settingMistSolo");
        this.mistDuo = this.returnLocalBool("settingMistDuo");


        this.mistEnchants[0] = this.returnLocalBool("settingMistE0");
        this.mistEnchants[1] = this.returnLocalBool("settingMistE1");
        this.mistEnchants[2] = this.returnLocalBool("settingMistE2");
        this.mistEnchants[3] = this.returnLocalBool("settingMistE3");
        this.mistEnchants[4] = this.returnLocalBool("settingMistE4");


        this.dungeonEnchants[0] = this.returnLocalBool("settingDungeonE0");
        this.dungeonEnchants[1] = this.returnLocalBool("settingDungeonE1");
        this.dungeonEnchants[2] = this.returnLocalBool("settingDungeonE2");
        this.dungeonEnchants[3] = this.returnLocalBool("settingDungeonE3");
        this.dungeonEnchants[4] = this.returnLocalBool("settingDungeonE4");



        this.dungeonSolo = this.returnLocalBool("settingDungeonSolo");
        this.dungeonDuo = this.returnLocalBool("settingDungeonDuo");
     

        this.ignoreList = JSON.parse(localStorage.getItem("ignoreList")) || [];

        
    }
}