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

    
        this.addItem(1850, 'T4_OFF_SHIELD', 1);
        this.addItem(1875, 'T4_OFF_TOWERSHIELD_UNDEAD', 1);
        this.addItem(1900, 'T4_OFF_SHIELD_HELL', 1);
        this.addItem(1925, 'T4_OFF_SPIKEDSHIELD_MORGANA', 1);
        this.addItem(1950, 'T4_OFF_SHIELD_AVALON', 1);
        this.addItem(1977, 'T4_OFF_BOOK', 1);
        this.addItem(2002, 'T4_OFF_ORB_MORGANA', 1);
        this.addItem(2027, 'T4_OFF_DEMONSKULL_HELL', 1);
        this.addItem(2052, 'T4_OFF_TOTEM_KEEPER', 1);
        this.addItem(2077, 'T4_OFF_CENSER_AVALON', 1);
        this.addItem(2103, 'T4_OFF_TORCH', 1);
        this.addItem(2128, 'T4_OFF_HORN_KEEPER', 1);
        this.addItem(2153, 'T4_OFF_TALISMAN_AVALON', 1);
        this.addItem(2178, 'T4_OFF_LAMP_UNDEAD', 1);
        this.addItem(2203, 'T4_OFF_JESTERCANE_HELL', 1);
        this.addItem(2228, 'T2_CAPE', 0);
        this.addItem(2229, 'T3_CAPE', 0);
        this.addItem(2230, 'T4_CAPE', 1);
        this.addItem(2255, 'T4_CAPEITEM_FW_BRIDGEWATCH', 1);
        this.addItem(2280, 'T4_CAPEITEM_FW_FORTSTERLING', 1);
        this.addItem(2305, 'T4_CAPEITEM_FW_LYMHURST', 1);
        this.addItem(2330, 'T4_CAPEITEM_FW_MARTLOCK', 1);
        this.addItem(2355, 'T4_CAPEITEM_FW_THETFORD', 1);
        this.addItem(2380, 'T4_CAPEITEM_FW_CAERLEON', 1);
        this.addItem(2405, 'T4_CAPEITEM_FW_BRECILIEN', 1);
        this.addItem(2430, 'T4_CAPEITEM_AVALON', 1);
        this.addItem(2455, 'T4_CAPEITEM_HERETIC', 1);
        this.addItem(2505, 'T4_CAPEITEM_KEEPER', 1);
        this.addItem(2530, 'T4_CAPEITEM_MORGANA', 1);
        this.addItem(2555, 'T4_CAPEITEM_DEMON', 1);
        this.addItem(2582, 'T2_BAG', 0);
        this.addItem(2583, 'T3_BAG', 0);
        this.addItem(2584, 'T4_BAG', 1);
        this.addItem(2609, 'T4_BAG_INSIGHT', 1);
        this.addItem(3081, 'T2_HEAD_PLATE_SET1', 0);
        this.addItem(3083, 'T4_HEAD_PLATE_SET1', 1);
        this.addItem(3108, 'T2_ARMOR_PLATE_SET1', 0);
        this.addItem(3110, 'T4_ARMOR_PLATE_SET1', 1);
        this.addItem(3135, 'T2_SHOES_PLATE_SET1', 0);
        this.addItem(3137, 'T4_SHOES_PLATE_SET1', 1);
        this.addItem(3162, 'T4_HEAD_PLATE_SET2', 1);
        this.addItem(3187, 'T4_ARMOR_PLATE_SET2', 1);
        this.addItem(3212, 'T4_SHOES_PLATE_SET2', 1);
        this.addItem(3237, 'T4_HEAD_PLATE_SET3', 1);
        this.addItem(3262, 'T4_ARMOR_PLATE_SET3', 1);
        this.addItem(3287, 'T4_SHOES_PLATE_SET3', 1);
        this.addItem(3312, 'T4_HEAD_PLATE_UNDEAD', 1);
        this.addItem(3337, 'T4_ARMOR_PLATE_UNDEAD', 1);
        this.addItem(3362, 'T4_SHOES_PLATE_UNDEAD', 1);
        this.addItem(3387, 'T4_HEAD_PLATE_HELL', 1);
        this.addItem(3412, 'T4_ARMOR_PLATE_HELL', 1);
        this.addItem(3437, 'T4_SHOES_PLATE_HELL', 1);
        this.addItem(3462, 'T4_HEAD_PLATE_KEEPER', 1);
        this.addItem(3487, 'T4_ARMOR_PLATE_KEEPER', 1);
        this.addItem(3512, 'T4_SHOES_PLATE_KEEPER', 1);
        this.addItem(3537, 'T4_HEAD_PLATE_FEY', 1);
        this.addItem(3562, 'T4_ARMOR_PLATE_FEY', 1);
        this.addItem(3587, 'T4_SHOES_PLATE_FEY', 1);
        this.addItem(3612, 'T4_HEAD_PLATE_AVALON', 1);
        this.addItem(3637, 'T4_ARMOR_PLATE_AVALON', 1);
        this.addItem(3662, 'T4_SHOES_PLATE_AVALON', 1);
        this.addItem(3690, 'T4_HEAD_LEATHER_SET1', 1);
        this.addItem(3718, 'T4_ARMOR_LEATHER_SET1', 1);
        this.addItem(3746, 'T4_SHOES_LEATHER_SET1', 1);
        this.addItem(3771, 'T4_HEAD_LEATHER_SET2', 1);
        this.addItem(3796, 'T4_ARMOR_LEATHER_SET2', 1);
        this.addItem(3821, 'T4_SHOES_LEATHER_SET2', 1);
        this.addItem(3846, 'T4_HEAD_LEATHER_SET3', 1);
        this.addItem(3871, 'T4_ARMOR_LEATHER_SET3', 1);
        this.addItem(3896, 'T4_SHOES_LEATHER_SET3', 1);
        this.addItem(3921, 'T4_HEAD_LEATHER_MORGANA', 1);
        this.addItem(3946, 'T4_ARMOR_LEATHER_MORGANA', 1);
        this.addItem(3971, 'T4_SHOES_LEATHER_MORGANA', 1);
        this.addItem(3996, 'T4_HEAD_LEATHER_HELL', 1);
        this.addItem(4021, 'T4_ARMOR_LEATHER_HELL', 1);
        this.addItem(4046, 'T4_SHOES_LEATHER_HELL', 1);
        this.addItem(4071, 'T4_HEAD_LEATHER_UNDEAD', 1);
        this.addItem(4121, 'T4_SHOES_LEATHER_UNDEAD', 1);
        this.addItem(4146, 'T4_HEAD_LEATHER_FEY', 1);
        this.addItem(4171, 'T4_ARMOR_LEATHER_FEY', 1);
        this.addItem(4221, 'T4_HEAD_LEATHER_AVALON', 1);
        this.addItem(4246, 'T4_ARMOR_LEATHER_AVALON', 1);
        this.addItem(4271, 'T4_SHOES_LEATHER_AVALON', 1);
        this.addItem(4298, 'T4_HEAD_CLOTH_SET1', 1);
        this.addItem(4325, 'T4_ARMOR_CLOTH_SET1', 1);
        this.addItem(4352, 'T4_SHOES_CLOTH_SET1', 1);
        this.addItem(4377, 'T4_HEAD_CLOTH_SET2', 1);
        this.addItem(4402, 'T4_ARMOR_CLOTH_SET2', 1);
        this.addItem(4427, 'T4_SHOES_CLOTH_SET2', 1);
        this.addItem(4452, 'T4_HEAD_CLOTH_SET3', 1);
        this.addItem(4477, 'T4_ARMOR_CLOTH_SET3', 1);
        this.addItem(4502, 'T4_SHOES_CLOTH_SET3', 1);
        this.addItem(4527, 'T4_HEAD_CLOTH_KEEPER', 1);
        this.addItem(4552, 'T4_ARMOR_CLOTH_KEEPER', 1);
        this.addItem(4577, 'T4_SHOES_CLOTH_KEEPER', 1);
        this.addItem(4602, 'T4_HEAD_CLOTH_HELL', 1);
        this.addItem(4627, 'T4_ARMOR_CLOTH_HELL', 1);
        this.addItem(4652, 'T4_SHOES_CLOTH_HELL', 1);
        this.addItem(4677, 'T4_HEAD_CLOTH_MORGANA', 1);
        this.addItem(4702, 'T4_ARMOR_CLOTH_MORGANA', 1);
        this.addItem(4727, 'T4_SHOES_CLOTH_MORGANA', 1);
        this.addItem(4777, 'T4_ARMOR_CLOTH_FEY', 1);
        this.addItem(4802, 'T4_SHOES_CLOTH_FEY', 1);
        this.addItem(4827, 'T4_HEAD_CLOTH_AVALON', 1);
        this.addItem(4852, 'T4_ARMOR_CLOTH_AVALON', 1);
        this.addItem(4877, 'T4_SHOES_CLOTH_AVALON', 1);
        this.addItem(4902, 'T4_HEAD_CLOTH_ROYAL', 1);
        this.addItem(4927, 'T4_ARMOR_CLOTH_ROYAL', 1);
        this.addItem(4952, 'T4_SHOES_CLOTH_ROYAL', 1);
        this.addItem(4977, 'T4_HEAD_LEATHER_ROYAL', 1);
        this.addItem(5002, 'T4_ARMOR_LEATHER_ROYAL', 1);
        this.addItem(5027, 'T4_SHOES_LEATHER_ROYAL', 1);
        this.addItem(5052, 'T4_HEAD_PLATE_ROYAL', 1);
        this.addItem(5077, 'T4_ARMOR_PLATE_ROYAL', 1);
        this.addItem(5102, 'T4_SHOES_PLATE_ROYAL', 1);
        this.addItem(5127, 'T4_HEAD_GATHERER_FIBER', 1);
        this.addItem(5152, 'T4_ARMOR_GATHERER_FIBER', 1);
        this.addItem(5177, 'T4_SHOES_GATHERER_FIBER', 1);
        this.addItem(5202, 'T4_BACKPACK_GATHERER_FIBER', 1);
        this.addItem(5227, 'T4_HEAD_GATHERER_HIDE', 1);
        this.addItem(5252, 'T4_ARMOR_GATHERER_HIDE', 1);
        this.addItem(5277, 'T4_SHOES_GATHERER_HIDE', 1);
        this.addItem(5302, 'T4_BACKPACK_GATHERER_HIDE', 1);
        this.addItem(5327, 'T4_HEAD_GATHERER_ORE', 1);
        this.addItem(5352, 'T4_ARMOR_GATHERER_ORE', 1);
        this.addItem(5377, 'T4_SHOES_GATHERER_ORE', 1);
        this.addItem(5402, 'T4_BACKPACK_GATHERER_ORE', 1);
        this.addItem(5427, 'T4_HEAD_GATHERER_ROCK', 1);
        this.addItem(5452, 'T4_ARMOR_GATHERER_ROCK', 1);
        this.addItem(5477, 'T4_SHOES_GATHERER_ROCK', 1);
        this.addItem(5502, 'T4_BACKPACK_GATHERER_ROCK', 1);
        this.addItem(5527, 'T4_HEAD_GATHERER_WOOD', 1);
        this.addItem(5552, 'T4_ARMOR_GATHERER_WOOD', 1);
        this.addItem(5577, 'T4_SHOES_GATHERER_WOOD', 1);
        this.addItem(5602, 'T4_BACKPACK_GATHERER_WOOD', 1);
        this.addItem(5627, 'T4_HEAD_GATHERER_FISH', 1);
        this.addItem(5652, 'T4_ARMOR_GATHERER_FISH', 1);
        this.addItem(5677, 'T4_SHOES_GATHERER_FISH', 1);
        this.addItem(5702, 'T4_BACKPACK_GATHERER_FISH', 1);
        this.addItem(5939, 'T4_2H_BOW', 1);
        this.addItem(5964, 'T4_2H_WARBOW', 1);
        this.addItem(5989, 'T4_2H_LONGBOW', 1);
        this.addItem(6014, 'T4_2H_LONGBOW_UNDEAD', 1);
        this.addItem(6039, 'T4_2H_BOW_HELL', 1);
        this.addItem(6064, 'T4_2H_BOW_KEEPER', 1);
        this.addItem(6089, 'T4_2H_BOW_AVALON', 1);
        this.addItem(6115, 'T4_2H_CROSSBOW', 1);
        this.addItem(6140, 'T4_2H_CROSSBOWLARGE', 1);
        this.addItem(6165, 'T4_MAIN_1HCROSSBOW', 1);
        this.addItem(6190, 'T4_2H_REPEATINGCROSSBOW_UNDEAD', 1);
        this.addItem(6215, 'T4_2H_DUALCROSSBOW_HELL', 1);
        this.addItem(6240, 'T4_2H_CROSSBOWLARGE_MORGANA', 1);
        this.addItem(6265, 'T4_2H_CROSSBOW_CANNON_AVALON', 1);
        this.addItem(6291, 'T4_MAIN_CURSEDSTAFF', 1);
        this.addItem(6316, 'T4_2H_CURSEDSTAFF', 1);
        this.addItem(6341, 'T4_2H_DEMONICSTAFF', 1);
        this.addItem(6366, 'T4_MAIN_CURSEDSTAFF_UNDEAD', 1);
        this.addItem(6391, 'T4_2H_SKULLORB_HELL', 1);
        this.addItem(6441, 'T4_MAIN_CURSEDSTAFF_AVALON', 1);
        this.addItem(6468, 'T4_MAIN_FIRESTAFF', 1);
        this.addItem(6493, 'T4_2H_FIRESTAFF', 1);
        this.addItem(6518, 'T4_2H_INFERNOSTAFF', 1);
        this.addItem(6543, 'T4_MAIN_FIRESTAFF_KEEPER', 1);
        this.addItem(6568, 'T4_2H_FIRESTAFF_HELL', 1);
        this.addItem(6593, 'T4_2H_INFERNOSTAFF_MORGANA', 1);
        this.addItem(6618, 'T4_2H_FIRE_RINGPAIR_AVALON', 1);
        this.addItem(6644, 'T4_MAIN_FROSTSTAFF', 1);
        this.addItem(6669, 'T4_2H_FROSTSTAFF', 1);
        this.addItem(6694, 'T4_2H_GLACIALSTAFF', 1);
        this.addItem(6719, 'T4_MAIN_FROSTSTAFF_KEEPER', 1);
        this.addItem(6744, 'T4_2H_ICEGAUNTLETS_HELL', 1);
        this.addItem(6769, 'T4_2H_ICECRYSTAL_UNDEAD', 1);
        this.addItem(6794, 'T4_MAIN_FROSTSTAFF_AVALON', 1);
        this.addItem(6820, 'T4_MAIN_ARCANESTAFF', 1);
        this.addItem(6845, 'T4_2H_ARCANESTAFF', 1);
        this.addItem(6870, 'T4_2H_ENIGMATICSTAFF', 1);
        this.addItem(6895, 'T4_MAIN_ARCANESTAFF_UNDEAD', 1);
        this.addItem(6920, 'T4_2H_ARCANESTAFF_HELL', 1);
        this.addItem(6945, 'T4_2H_ENIGMATICORB_MORGANA', 1);
        this.addItem(6970, 'T4_2H_ARCANE_RINGPAIR_AVALON', 1);
        this.addItem(7021, 'T4_MAIN_HOLYSTAFF', 1);
        this.addItem(7046, 'T4_2H_HOLYSTAFF', 1);
        this.addItem(7071, 'T4_2H_DIVINESTAFF', 1);
        this.addItem(7096, 'T4_MAIN_HOLYSTAFF_MORGANA', 1);
        this.addItem(7121, 'T4_2H_HOLYSTAFF_HELL', 1);
        this.addItem(7146, 'T4_2H_HOLYSTAFF_UNDEAD', 1);
        this.addItem(7171, 'T4_MAIN_HOLYSTAFF_AVALON', 1);
        this.addItem(7197, 'T4_MAIN_NATURESTAFF', 1);
        this.addItem(7222, 'T4_2H_NATURESTAFF', 1);
        this.addItem(7247, 'T4_2H_WILDSTAFF', 1);
        this.addItem(7272, 'T4_MAIN_NATURESTAFF_KEEPER', 1);
        this.addItem(7297, 'T4_2H_NATURESTAFF_HELL', 1);
        this.addItem(7322, 'T4_2H_NATURESTAFF_KEEPER', 1);
        this.addItem(7347, 'T4_MAIN_NATURESTAFF_AVALON', 1);
        this.addItem(7373, 'T4_MAIN_DAGGER', 1);
        this.addItem(7398, 'T4_2H_DAGGERPAIR', 1);
        this.addItem(7423, 'T4_2H_CLAWPAIR', 1);
        this.addItem(7448, 'T4_MAIN_RAPIER_MORGANA', 1);
        this.addItem(7473, 'T4_MAIN_DAGGER_HELL', 1);
        this.addItem(7518, 'T4_2H_DUALSICKLE_UNDEAD', 1);
        this.addItem(7543, 'T4_2H_DAGGER_KATAR_AVALON', 1);
        this.addItem(7569, 'T4_MAIN_SPEAR', 1);
        this.addItem(7594, 'T4_2H_SPEAR', 1);
        this.addItem(7619, 'T4_2H_GLAIVE', 1);
        this.addItem(7644, 'T4_MAIN_SPEAR_KEEPER', 1);
        this.addItem(7669, 'T4_2H_HARPOON_HELL', 1);
        this.addItem(7694, 'T4_2H_TRIDENT_UNDEAD', 1);
        this.addItem(7719, 'T4_MAIN_SPEAR_LANCE_AVALON', 1);
        this.addItem(7770, 'T4_MAIN_AXE', 1);
        this.addItem(7795, 'T4_2H_AXE', 1);
        this.addItem(7820, 'T4_2H_HALBERD', 1);
        this.addItem(7845, 'T4_2H_HALBERD_MORGANA', 1);
        this.addItem(7870, 'T4_2H_SCYTHE_HELL', 1);
        this.addItem(7895, 'T4_2H_DUALAXE_KEEPER', 1);
        this.addItem(7920, 'T4_2H_AXE_AVALON', 1);
        this.addItem(7948, 'T4_MAIN_SWORD', 1);
        this.addItem(7973, 'T4_2H_CLAYMORE', 1);
        this.addItem(7998, 'T4_2H_DUALSWORD', 1);
        this.addItem(8023, 'T4_MAIN_SCIMITAR_MORGANA', 1);
        this.addItem(8048, 'T4_2H_CLEAVER_HELL', 1);
        this.addItem(8073, 'T4_2H_DUALSCIMITAR_UNDEAD', 1);
        this.addItem(8098, 'T4_2H_CLAYMORE_AVALON', 1);
        this.addItem(8149, 'T4_2H_QUARTERSTAFF', 1);
        this.addItem(8174, 'T4_2H_IRONCLADEDSTAFF', 1);
        this.addItem(8199, 'T4_2H_DOUBLEBLADEDSTAFF', 1);
        this.addItem(8224, 'T4_2H_COMBATSTAFF_MORGANA', 1);
        this.addItem(8249, 'T4_2H_TWINSCYTHE_HELL', 1);
        this.addItem(8274, 'T4_2H_ROCKSTAFF_KEEPER', 1);
        this.addItem(8299, 'T4_2H_QUARTERSTAFF_AVALON', 1);
        this.addItem(8325, 'T4_MAIN_HAMMER', 1);
        this.addItem(8350, 'T4_2H_POLEHAMMER', 1);
        this.addItem(8375, 'T4_2H_HAMMER', 1);
        this.addItem(8400, 'T4_2H_HAMMER_UNDEAD', 1);
        this.addItem(8425, 'T4_2H_DUALHAMMER_HELL', 1);
        this.addItem(8450, 'T4_2H_RAM_KEEPER', 1);
        this.addItem(8475, 'T4_2H_HAMMER_AVALON', 1);
        this.addItem(8501, 'T4_MAIN_MACE', 1);
        this.addItem(8526, 'T4_2H_MACE', 1);
        this.addItem(8551, 'T4_2H_FLAIL', 1);
        this.addItem(8576, 'T4_MAIN_ROCKMACE_KEEPER', 1);
        this.addItem(8601, 'T4_MAIN_MACE_HELL', 1);
        this.addItem(8626, 'T4_2H_MACE_MORGANA', 1);
        this.addItem(8651, 'T4_2H_DUALMACE_AVALON', 1);
        this.addItem(8677, 'T4_2H_KNUCKLES_SET1', 1);
        this.addItem(8702, 'T4_2H_KNUCKLES_SET2', 1);
        this.addItem(8727, 'T4_2H_KNUCKLES_SET3', 1);
        this.addItem(8752, 'T4_2H_KNUCKLES_KEEPER', 1);
        this.addItem(8777, 'T4_2H_KNUCKLES_HELL', 1);
        this.addItem(8802, 'T4_2H_KNUCKLES_MORGANA', 1);
        this.addItem(8827, 'T4_2H_KNUCKLES_AVALON', 1);
        this.addItem(8853, 'T4_2H_SHAPESHIFTER_SET1', 1);
        this.addItem(8878, 'T4_2H_SHAPESHIFTER_SET2', 1);
        this.addItem(8903, 'T4_2H_SHAPESHIFTER_SET3', 1);
        this.addItem(8928, 'T4_2H_SHAPESHIFTER_MORGANA', 1);
        this.addItem(8953, 'T4_2H_SHAPESHIFTER_HELL', 1);
        this.addItem(9003, 'T4_2H_SHAPESHIFTER_AVALON', 1);
    }
}

