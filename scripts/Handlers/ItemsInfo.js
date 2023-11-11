class ItemsInfo{


    constructor()
    {


        this.iteminfo = {};
    }

    addItem(id, name , val)
    {
        if(val ==0)
        {
            this.iteminfo[id] = name;
        }
        else
        {
            let code = id - 1;
            let itemNameBuilder = name.split('');
            let counter = 0;
     

            for (let i = 4; i <= 8; i++) {
                counter++;
                itemNameBuilder[1] = i.toString();
                this.iteminfo[code + counter] = itemNameBuilder.join('');

                for (let j = 1; j <= 4; j++) {
                    counter++;
                    name = itemNameBuilder.join('') + "@" + j;
                    this.iteminfo[code + counter] = name;
                }
            }
        }
        
    }

    initItems()
    {


        this.addItem(1830, 'T4_OFF_SHIELD', 1);
        this.addItem(1855, 'T4_OFF_TOWERSHIELD_UNDEAD', 1);
        this.addItem(1880, 'T4_OFF_SHIELD_HELL', 1);
        this.addItem(1905, 'T4_OFF_SPIKEDSHIELD_MORGANA', 1);
        this.addItem(1930, 'T4_OFF_SHIELD_AVALON', 1);
        this.addItem(1956, 'T3_OFF_BOOK', 0);
        this.addItem(1957, 'T4_OFF_BOOK', 1);
        this.addItem(1982, 'T4_OFF_ORB_MORGANA', 1);
        this.addItem(2007, 'T4_OFF_DEMONSKULL_HELL', 1);
        this.addItem(2032, 'T4_OFF_TOTEM_KEEPER', 1);
        this.addItem(2057, 'T4_OFF_CENSER_AVALON', 1);
        this.addItem(2083, 'T4_OFF_TORCH', 1);
        this.addItem(2108, 'T4_OFF_HORN_KEEPER', 1);
        this.addItem(2133, 'T4_OFF_TALISMAN_AVALON', 1);
        this.addItem(2158, 'T4_OFF_LAMP_UNDEAD', 1);
        this.addItem(2183, 'T4_OFF_JESTERCANE_HELL', 1);
        this.addItem(2208, 'T2_CAPE', 0);
        this.addItem(2209, 'T3_CAPE', 0);
        this.addItem(2210, 'T4_CAPE', 1);
        this.addItem(2235, 'T4_CAPEITEM_FW_BRIDGEWATCH', 1);
        this.addItem(2260, 'T4_CAPEITEM_FW_FORTSTERLING', 1);
        this.addItem(2285, 'T4_CAPEITEM_FW_LYMHURST', 1);
        this.addItem(2310, 'T4_CAPEITEM_FW_MARTLOCK', 1);
        this.addItem(2335, 'T4_CAPEITEM_FW_THETFORD', 1);
        this.addItem(2360, 'T4_CAPEITEM_FW_CAERLEON', 1);
        this.addItem(2385, 'T4_BRACILEN_CAPE', 1);
        this.addItem(2410, 'T4_AVA_CAPE', 1);
        this.addItem(2435, 'T4_CAPEITEM_HERETIC', 1);
        this.addItem(2460, 'T4_CAPEITEM_UNDEAD', 1);
        this.addItem(2485, 'T4_CAPEITEM_KEEPER', 1);
        this.addItem(2510, 'T4_CAPEITEM_MORGANA', 1);
        this.addItem(2535, 'T4_CAPEITEM_DEMON', 1);
        this.addItem(2562, 'T2_BAG', 0);
        this.addItem(2563, 'T3_BAG', 0);
        this.addItem(2564, 'T4_BAG', 1);
        this.addItem(2589, 'T4_BAG_INSIGHT', 1);
        this.addItem(2710, 'T5_MOUNT_ARMORED_HORSE', 0);
        this.addItem(2711, 'T6_MOUNT_ARMORED_HORSE', 0);
        this.addItem(2712, 'T7_MOUNT_ARMORED_HORSE', 0);
        this.addItem(2713, 'T8_MOUNT_ARMORED_HORSE', 0);
        this.addItem(2714, 'T3_MOUNT_OX', 0);
        this.addItem(2715, 'T4_MOUNT_OX', 0);
        this.addItem(2716, 'T5_MOUNT_OX', 0);
        this.addItem(2717, 'T6_MOUNT_OX', 0);
        this.addItem(2718, 'T7_MOUNT_OX', 0);
        this.addItem(2719, 'T8_MOUNT_OX', 0);
        this.addItem(3063, 'T4_HEAD_PLATE_SET1', 1);
        this.addItem(3090, 'T4_ARMOR_PLATE_SET1', 1);
        this.addItem(3117, 'T4_SHOES_PLATE_SET1', 1);
        this.addItem(3142, 'T4_HEAD_PLATE_SET2', 1);
        this.addItem(3167, 'T4_ARMOR_PLATE_SET2', 1);
        this.addItem(3192, 'T4_SHOES_PLATE_SET2', 1);
        this.addItem(3217, 'T4_HEAD_PLATE_SET3', 1);
        this.addItem(3242, 'T4_ARMOR_PLATE_SET3', 1);
        this.addItem(3267, 'T4_SHOES_PLATE_SET3', 1);
        this.addItem(3317, 'T4_ARMOR_PLATE_UNDEAD', 1);
        this.addItem(3342, 'T4_SHOES_PLATE_UNDEAD', 1);
        this.addItem(3367, 'T4_HEAD_PLATE_HELL', 1);
        this.addItem(3392, 'T4_ARMOR_PLATE_HELL', 1);
        this.addItem(3417, 'T4_SHOES_PLATE_HELL', 1);
        this.addItem(3442, 'T4_HEAD_PLATE_KEEPER', 1);
        this.addItem(3467, 'T4_ARMOR_PLATE_KEEPER', 1);
        this.addItem(3492, 'T4_SHOES_PLATE_KEEPER', 1);
        this.addItem(3517, 'T4_HEAD_PLATE_FEY', 1);
        this.addItem(3542, 'T4_ARMOR_PLATE_FEY', 1);
        this.addItem(3592, 'T4_HEAD_PLATE_AVALON', 1);
        this.addItem(3617, 'T4_ARMOR_PLATE_AVALON', 1);
        this.addItem(3642, 'T4_SHOES_PLATE_AVALON', 1);
        this.addItem(3670, 'T4_HEAD_LEATHER_SET1', 1);
        this.addItem(3698, 'T4_ARMOR_LEATHER_SET1', 1);
        this.addItem(3726, 'T4_SHOES_LEATHER_SET1', 1);
        this.addItem(3751, 'T4_HEAD_LEATHER_SET2', 1);
        this.addItem(3776, 'T4_ARMOR_LEATHER_SET2', 1);
        this.addItem(3801, 'T4_SHOES_LEATHER_SET2', 1);
        this.addItem(3826, 'T4_HEAD_LEATHER_SET3', 1);
        this.addItem(3851, 'T4_ARMOR_LEATHER_SET3', 1);
        this.addItem(3876, 'T4_SHOES_LEATHER_SET3', 1);
        this.addItem(3901, 'T4_HEAD_LEATHER_MORGANA', 1);
        this.addItem(3926, 'T4_ARMOR_LEATHER_MORGANA', 1);
        this.addItem(3951, 'T4_SHOES_LEATHER_MORGANA', 1);
        this.addItem(3976, 'T4_HEAD_LEATHER_HELL', 1);
        this.addItem(4001, 'T4_ARMOR_LEATHER_HELL', 1);
        this.addItem(4026, 'T4_SHOES_LEATHER_UNDEAD', 1);
        this.addItem(4051, 'T4_HEAD_LEATHER_UNDEAD', 1);
        this.addItem(4076, 'T4_ARMOR_LEATHER_UNDEAD', 1);
        this.addItem(4126, 'T4_HEAD_LEATHER_FEY', 1);
        this.addItem(4151, 'T4_ARMOR_LEATHER_FEY', 1);
        this.addItem(4176, 'T4_SHOES_LEATHER_FEY', 1);
        this.addItem(4201, 'T4_HEAD_LEATHER_AVALON', 1);
        this.addItem(4226, 'T4_ARMOR_LEATHER_AVALON', 1);
        this.addItem(4251, 'T4_SHOES_LEATHER_AVALON', 1);
        this.addItem(4278, 'T4_HEAD_CLOTH_SET1', 1);
        this.addItem(4305, 'T4_ARMOR_CLOTH_SET1', 1);
        this.addItem(4332, 'T4_SHOES_CLOTH_SET1', 1);
        this.addItem(4357, 'T4_HEAD_CLOTH_SET2', 1);
        this.addItem(4382, 'T4_ARMOR_CLOTH_SET2', 1);
        this.addItem(4407, 'T4_SHOES_CLOTH_SET2', 1);
        this.addItem(4432, 'T4_HEAD_CLOTH_SET3', 1);
        this.addItem(4457, 'T4_ARMOR_CLOTH_SET3', 1);
        this.addItem(4482, 'T4_SHOES_CLOTH_SET3', 1);
        this.addItem(4507, 'T4_HEAD_CLOTH_KEEPER', 1);
        this.addItem(4532, 'T4_ARMOR_CLOTH_KEEPER', 1);
        this.addItem(4557, 'T4_SHOES_CLOTH_KEEPER', 1);
        this.addItem(4582, 'T4_HEAD_CLOTH_HELL', 1);
        this.addItem(4607, 'T4_ARMOR_CLOTH_HELL', 1);
        this.addItem(4632, 'T4_SHOES_CLOTH_HELL', 1);
        this.addItem(4657, 'T4_HEAD_CLOTH_MORGANA', 1);
        this.addItem(4682, 'T4_ARMOR_CLOTH_MORGANA', 1);
        this.addItem(4707, 'T4_SHOES_CLOTH_MORGANA', 1);
        this.addItem(4732, 'T4_HEAD_CLOTH_FEY', 1);
        this.addItem(4757, 'T4_ARMOR_CLOTH_FEY', 1);
        this.addItem(4782, 'T4_SHOES_CLOTH_FEY', 1);
        this.addItem(4807, 'T4_HEAD_CLOTH_AVALON', 1);
        this.addItem(4832, 'T4_ARMOR_CLOTH_AVALON', 1);
        this.addItem(4857, 'T4_SHOES_CLOTH_AVALON', 1);
        this.addItem(4882, 'T4_HEAD_CLOTH_ROYAL', 1);
        this.addItem(4907, 'T4_ARMOR_CLOTH_ROYAL', 1);
        this.addItem(4932, 'T4_SHOES_CLOTH_ROYAL', 1);
        this.addItem(4957, 'T4_HEAD_LEATHER_ROYAL', 1);
        this.addItem(4982, 'T4_ARMOR_LEATHER_ROYAL', 1);
        this.addItem(5007, 'T4_SHOES_LEATHER_ROYAL', 1);
        this.addItem(5032, 'T4_HEAD_PLATE_ROYAL', 1);
        this.addItem(5057, 'T4_ARMOR_PLATE_ROYAL', 1);
        this.addItem(5082, 'T4_SHOES_PLATE_ROYAL', 1);
        this.addItem(5107, 'T4_HEAD_GATHERER_FIBER', 1);
        this.addItem(5132, 'T4_ARMOR_GATHERER_FIBER', 1);
        this.addItem(5157, 'T4_SHOES_GATHERER_FIBER', 1);
        this.addItem(5182, 'T4_BACKPACK_GATHERER_FIBER', 1);
        this.addItem(5207, 'T4_HEAD_GATHERER_HIDE', 1);
        this.addItem(5257, 'T4_SHOES_GATHERER_HIDE', 1);
        this.addItem(5282, 'T4_BACKPACK_GATHERER_HIDE', 1);
        this.addItem(5307, 'T4_HEAD_GATHERER_ORE', 1);
        this.addItem(5332, 'T4_ARMOR_GATHERER_ORE', 1);
        this.addItem(5357, 'T4_SHOES_GATHERER_ORE', 1);
        this.addItem(5407, 'T4_HEAD_GATHERER_ROCK', 1);
        this.addItem(5432, 'T4_ARMOR_GATHERER_ROCK', 1);
        this.addItem(5457, 'T4_SHOES_GATHERER_ROCK', 1);
        this.addItem(5482, 'T4_BACKPACK_GATHERER_ROCK', 1);
        this.addItem(5507, 'T4_HEAD_GATHERER_WOOD', 1);
        this.addItem(5532, 'T4_ARMOR_GATHERER_WOOD', 1);
        this.addItem(5557, 'T4_SHOES_GATHERER_WOOD', 1);
        this.addItem(5582, 'T4_BACKPACK_GATHERER_WOOD', 1);
        this.addItem(5607, 'T4_HEAD_GATHERER_FISH', 1);
        this.addItem(5632, 'T4_ARMOR_GATHERER_FISH', 1);
        this.addItem(5657, 'T4_SHOES_GATHERER_FISH', 1);
        this.addItem(5682, 'T4_BACKPACK_GATHERER_FISH', 1);
        this.addItem(5919, 'T4_2H_BOW', 1);
        this.addItem(5944, 'T4_2H_WARBOW', 1);
        this.addItem(5969, 'T4_2H_LONGBOW', 1);
        this.addItem(5994, 'T4_2H_LONGBOW_UNDEAD', 1);
        this.addItem(6019, 'T4_2H_BOW_HELL', 1);
        this.addItem(6044, 'T4_2H_BOW_KEEPER', 1);
        this.addItem(6069, 'T4_2H_BOW_AVALON', 1);
        this.addItem(6095, 'T4_2H_CROSSBOW', 1);
        this.addItem(6120, 'T4_2H_CROSSBOWLARGE', 1);
        this.addItem(6145, 'T4_MAIN_1HCROSSBOW', 1);
        this.addItem(6170, 'T4_2H_REPEATINGCROSSBOW_UNDEAD', 1);
        this.addItem(6195, 'T4_2H_DUALCROSSBOW_HELL', 1);
        this.addItem(6220, 'T4_2H_CROSSBOWLARGE_MORGANA', 1);
        this.addItem(6245, 'T4_2H_CROSSBOW_CANNON_AVALON', 1);
        this.addItem(6271, 'T4_MAIN_CURSEDSTAFF', 1);
        this.addItem(6296, 'T4_2H_CURSEDSTAFF', 1);
        this.addItem(6321, 'T4_2H_DEMONICSTAFF', 1);
        this.addItem(6346, 'T4_MAIN_CURSEDSTAFF_UNDEAD', 1);
        this.addItem(6371, 'T4_2H_SKULLORB_HELL', 1);
        this.addItem(6396, 'T4_2H_CURSEDSTAFF_MORGANA', 1);
        this.addItem(6421, 'T4_MAIN_CURSEDSTAFF_AVALON', 1);
        this.addItem(6448, 'T4_MAIN_FIRESTAFF', 1);
        this.addItem(6473, 'T4_2H_FIRESTAFF', 1);
        this.addItem(6498, 'T4_2H_INFERNOSTAFF', 1);
        this.addItem(6523, 'T4_MAIN_FIRESTAFF_KEEPER', 1);
        this.addItem(6548, 'T4_2H_FIRESTAFF_HELL', 1);
        this.addItem(6573, 'T4_2H_INFERNOSTAFF_MORGANA', 1);
        this.addItem(6598, 'T4_2H_FIRE_RINGPAIR_AVALON', 1);
        this.addItem(6624, 'T4_MAIN_FROSTSTAFF', 1);
        this.addItem(6649, 'T4_2H_FROSTSTAFF', 1);
        this.addItem(6674, 'T4_2H_GLACIALSTAFF', 1);
        this.addItem(6699, 'T4_MAIN_FROSTSTAFF_KEEPER', 1);
        this.addItem(6724, 'T4_2H_ICEGAUNTLETS_HELL', 1);
        this.addItem(6749, 'T4_2H_ICECRYSTAL_UNDEAD', 1);
        this.addItem(6774, 'T4_MAIN_FROSTSTAFF_AVALON', 1);
        this.addItem(6800, 'T4_MAIN_ARCANESTAFF', 1);
        this.addItem(6825, 'T4_2H_ARCANESTAFF', 1);
        this.addItem(6850, 'T4_2H_ENIGMATICSTAFF', 1);
        this.addItem(6875, 'T4_MAIN_ARCANESTAFF_UNDEAD', 1);
        this.addItem(6900, 'T4_2H_ARCANESTAFF_HELL', 1);
        this.addItem(6925, 'T4_2H_ENIGMATICORB_MORGANA', 1);
        this.addItem(6950, 'T4_2H_ARCANE_RINGPAIR_AVALON', 1);
        this.addItem(6976, 'T4_MAIN_HOLYSTAFF', 1);
        this.addItem(7001, 'T4_2H_HOLYSTAFF', 1);
        this.addItem(7026, 'T4_2H_DIVINESTAFF', 1);
        this.addItem(7051, 'T4_MAIN_HOLYSTAFF_MORGANA', 1);
        this.addItem(7076, 'T4_2H_HOLYSTAFF_HELL', 1);
        this.addItem(7101, 'T4_2H_HOLYSTAFF_UNDEAD', 1);
        this.addItem(7126, 'T4_MAIN_HOLYSTAFF_AVALON', 1);
        this.addItem(7152, 'T4_MAIN_NATURESTAFF', 1);
        this.addItem(7177, 'T4_2H_NATURESTAFF', 1);
        this.addItem(7202, 'T4_2H_WILDSTAFF', 1);
        this.addItem(7227, 'T4_MAIN_NATURESTAFF_KEEPER', 1);
        this.addItem(7252, 'T4_2H_NATURESTAFF_HELL', 1);
        this.addItem(7277, 'T4_2H_NATURESTAFF_KEEPER', 1);
        this.addItem(7302, 'T4_MAIN_NATURESTAFF_AVALON', 1);
        this.addItem(7328, 'T4_MAIN_DAGGER', 1);
        this.addItem(7353, 'T4_2H_DAGGERPAIR', 1);
        this.addItem(7378, 'T4_2H_CLAWPAIR', 1);
        this.addItem(7403, 'T4_MAIN_RAPIER_MORGANA', 1);
        this.addItem(7428, 'T4_MAIN_DAGGER_HELL', 1);
        this.addItem(7473, 'T4_2H_DUALSICKLE_UNDEAD', 1);
        this.addItem(7498, 'T4_2H_DAGGER_KATAR_AVALON', 1);
        this.addItem(7524, 'T4_MAIN_SPEAR', 1);
        this.addItem(7549, 'T4_2H_SPEAR', 1);
        this.addItem(7574, 'T4_2H_GLAIVE', 1);
        this.addItem(7599, 'T4_MAIN_SPEAR_KEEPER', 1);
        this.addItem(7624, 'T4_2H_HARPOON_HELL', 1);
        this.addItem(7649, 'T4_2H_TRIDENT_UNDEAD', 1);
        this.addItem(7674, 'T4_MAIN_SPEAR_LANCE_AVALON', 1);
        this.addItem(7700, 'T4_MAIN_AXE', 1);
        this.addItem(7725, 'T4_2H_AXE', 1);
        this.addItem(7750, 'T4_2H_HALBERD', 1);
        this.addItem(7775, 'T4_2H_HALBERD_MORGANA', 1);
        this.addItem(7800, 'T4_2H_SCYTHE_HELL', 1);
        this.addItem(7825, 'T4_2H_DUALAXE_KEEPER', 1);
        this.addItem(7850, 'T4_2H_AXE_AVALON', 1);
        this.addItem(7878, 'T4_MAIN_SWORD', 0);
        this.addItem(7903, 'T4_2H_CLAYMORE', 1);
        this.addItem(7928, 'T4_2H_DUALSWORD', 1);
        this.addItem(7953, 'T4_MAIN_SCIMITAR_MORGANA', 1);
        this.addItem(7978, 'T4_2H_CLEAVER_HELL', 1);
        this.addItem(8003, 'T4_2H_DUALSCIMITAR_UNDEAD', 1);
        this.addItem(8028, 'T4_2H_CLAYMORE_AVALON', 1);
        this.addItem(8054, 'T4_2H_QUARTERSTAFF', 1);
        this.addItem(8079, 'T4_2H_IRONCLADEDSTAFF', 1);
        this.addItem(8104, 'T4_2H_DOUBLEBLADEDSTAFF', 1);
        this.addItem(8129, 'T4_2H_COMBATSTAFF_MORGANA', 1);
        this.addItem(8154, 'T4_2H_TWINSCYTHE_HELL', 1);
        this.addItem(8179, 'T4_2H_ROCKSTAFF_KEEPER', 1);
        this.addItem(8204, 'T4_2H_QUARTERSTAFF_AVALON', 1);
        this.addItem(8230, 'T4_MAIN_HAMMER', 1);
        this.addItem(8255, 'T4_2H_POLEHAMMER', 1);
        this.addItem(8280, 'T4_2H_HAMMER', 1);
        this.addItem(8305, 'T4_2H_HAMMER_UNDEAD', 1);
        this.addItem(8330, 'T4_2H_DUALHAMMER_HELL', 1);
        this.addItem(8355, 'T4_2H_RAM_KEEPER', 1);
        this.addItem(8380, 'T4_2H_HAMMER_AVALON', 1);
        this.addItem(8406, 'T4_MAIN_MACE', 1);
        this.addItem(8431, 'T4_2H_MACE', 1);
        this.addItem(8456, 'T4_2H_FLAIL', 1);
        this.addItem(8481, 'T4_MAIN_ROCKMACE_KEEPER', 1);
        this.addItem(8506, 'T4_MAIN_MACE_HELL', 1);
        this.addItem(8531, 'T4_2H_MACE_MORGANA', 1);
        this.addItem(8556, 'T4_2H_DUALMACE_AVALON', 1);
        this.addItem(8582, 'T4_2H_KNUCKLES_SET1', 1);
        this.addItem(8607, 'T4_2H_KNUCKLES_SET2', 1);
        this.addItem(8632, 'T4_2H_KNUCKLES_SET3', 1);
        this.addItem(8657, 'T4_2H_KNUCKLES_KEEPER', 1);
        this.addItem(8682, 'T4_2H_KNUCKLES_HELL', 1);
        this.addItem(8707, 'T4_2H_KNUCKLES_MORGANA', 1);
        this.addItem(8732, 'T4_2H_KNUCKLES_AVALON', 1);
        this.addItem(11648, 'T1_OFF_SHIELD', 0);
        this.addItem(11649, 'T2_OFF_SHIELD', 0);
        this.addItem(11650, 'T3_OFF_SHIELD', 0);
        this.addItem(11776, 'T2_OFF_BOOK', 0);
        this.addItem(11903, 'T3_OFF_TORCH', 0);
        this.addItem(12525, 'T3_MOUNT_HORSE', 0);
        this.addItem(12526, 'T4_MOUNT_HORSE', 0);
        this.addItem(12527, 'T5_MOUNT_HORSE', 0);
        this.addItem(12528, 'T6_MOUNT_HORSE', 0);
        this.addItem(12529, 'T7_MOUNT_HORSE', 0);
        this.addItem(12530, 'T8_MOUNT_HORSE', 0);
        this.addItem(12882, 'T2_HEAD_PLATE_SET1', 0);
        this.addItem(12883, 'T3_HEAD_PLATE_SET1', 0);
        this.addItem(12909, 'T2_ARMOR_PLATE_SET1', 0);
        this.addItem(12910, 'T3_ARMOR_PLATE_SET1', 0);
        this.addItem(12936, 'T2_SHOES_PLATE_SET1', 0);
        this.addItem(12937, 'T3_SHOES_PLATE_SET1', 0);
        this.addItem(13113, 'T4_HEAD_PLATE_SET1', 1);
        this.addItem(13488, 'T1_HEAD_LEATHER_SET1', 0);
        this.addItem(13489, 'T2_HEAD_LEATHER_SET1', 0);
        this.addItem(13490, 'T3_HEAD_LEATHER_SET1', 0);
        this.addItem(13516, 'T1_ARMOR_LEATHER_SET1', 0);
        this.addItem(13517, 'T2_ARMOR_LEATHER_SET1', 0);
        this.addItem(13518, 'T3_ARMOR_LEATHER_SET1', 0);
        this.addItem(13544, 'T1_SHOES_LEATHER_SET1', 0);
        this.addItem(13545, 'T2_SHOES_LEATHER_SET1', 0);
        this.addItem(13546, 'T3_SHOES_LEATHER_SET1', 0);
        this.addItem(13922, 'T4_SHOES_LEATHER_UNDEAD', 1);
        this.addItem(14097, 'T2_HEAD_CLOTH_SET1', 0);
        this.addItem(14098, 'T3_HEAD_CLOTH_SET1', 0);
        this.addItem(14124, 'T2_ARMOR_CLOTH_SET1', 0);
        this.addItem(14125, 'T3_ARMOR_CLOTH_SET1', 0);
        this.addItem(14151, 'T2_SHOES_CLOTH_SET1', 0);
        this.addItem(14152, 'T3_SHOES_CLOTH_SET1', 0);
        this.addItem(14578, 'T5_ARMOR_CLOTH_FEY', 1);
        this.addItem(15203, 'T4_SHOES_GATHERER_ORE', 1);
        this.addItem(15453, 'T4_ARMOR_GATHERER_FISH', 1);
        this.addItem(15738, 'T2_2H_BOW', 0);
        this.addItem(15739, 'T3_2H_BOW', 0);
        this.addItem(15915, 'T3_2H_CROSSBOW', 0);
        this.addItem(16267, 'T2_MAIN_FIRESTAFF', 0);
        this.addItem(16268, 'T3_MAIN_FIRESTAFF', 0);
        this.addItem(16972, 'T3_MAIN_NATURESTAFF', 0);
        this.addItem(17148, 'T3_MAIN_DAGGER', 0);
        this.addItem(17294, 'T4_2H_DUALSICKLE_UNDEAD', 1);
        this.addItem(17344, 'T3_MAIN_SPEAR', 0);
        this.addItem(17520, 'T3_MAIN_AXE', 0);
        this.addItem(17696, 'T1_MAIN_SWORD', 0);
        this.addItem(17697, 'T2_MAIN_SWORD', 0);
        this.addItem(17698, 'T3_MAIN_SWORD', 0);
        this.addItem(17874, 'T3_2H_QUARTERSTAFF', 0);
        this.addItem(18050, 'T3_MAIN_HAMMER', 0);
        this.addItem(18226, 'T3_MAIN_MACE', 0);
        this.addItem(18402, 'T3_2H_KNUCKLES_SET1', 0);
    
    }
}

