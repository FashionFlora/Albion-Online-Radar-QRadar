export class MobsDrawing extends DrawingUtils {


    constructor(Settings) {

        super(Settings);
      
    }

    interpolate(mobs, mists , lpX, lpY, t) {








        for (const mobOne of mobs) {
            const hX = -1 * mobOne.posX + lpX;
            const hY = mobOne.posY - lpY;
            if (mobOne.hY == 0 && mobOne.hX == 0) {
                mobOne.hX = hX;
                mobOne.hY = hY;

            }
            mobOne.hX = this.lerp(mobOne.hX, hX, t);
            mobOne.hY = this.lerp(mobOne.hY, hY, t);
        }

        for (const mistOne of mists) {
            const hX = -1 * mistOne.posX + lpX;
            const hY = mistOne.posY - lpY;
            if (mistOne.hY == 0 && mistOne.hX == 0) {
                mistOne.hX = hX;
                mistOne.hY = hY;

            }
            mistOne.hX = this.lerp(mistOne.hX, hX, t);
            mistOne.hY = this.lerp(mistOne.hY, hY, t);
        }





    }
    invalidate(ctx, mobs, mists) {


 





        for (const mobOne of mobs) {


            
            if (mobOne.type == 3 && !this.settings.mobBoss) {

                continue;

            }
            else if(mobOne.type == 4 && !this.settings.drones) 
            {

                continue;

            } 
            else {

                if (!this.settings.mobEnchants[mobOne.enchantmentLevel]) {
                    continue; 
                }
                if (mobOne.type == 0 || mobOne.type == 1 && !this.settings.mobTiers[mobOne.tier - 1]) {
                    continue;
                }

            }
            

            const point = this.transformPoint(mobOne.hX, mobOne.hY);

 
            if (mobOne.type == 1) {


                this.drawImageCustom(ctx, point.x, point.y, "hide_" + mobOne.tier + "_" + mobOne.enchantmentLevel, 40);
            }
            else if (mobOne.type == 0) {

             

                if (myString.includes("wood")) {

                    this.drawImageCustom(ctx, point.x, point.y, "Logs_" + mobOne.tier + "_" + mobOne.enchantmentLevel, 40);
                }
                else {
                    this.drawImageCustom(ctx, point.x, point.y, mobOne.name + "_" + mobOne.tier + "_" + mobOne.enchantmentLevel, 40);
                }
         
            }
            else if (mobOne.type == 3) {

                this.drawImageCustom(ctx, point.x, point.y, this.name, 40);

            }
            else if (mobOne.type == 4) {
                this.drawImageCustom(ctx, point.x, point.y, "droneicon" , 40);
            }
            else {
        
             
                if (mobOne.enchantmentLevel == 1) {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "green");

                }
                else if (mobOne.enchantmentLevel == 2) {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "#45BDEE");

                }
                else if (mobOne.enchantmentLevel == 3) {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "purple");

                }
                else if (mobOne.enchantmentLevel == 4) {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "yellow");

                }
       
                this.drawFilledCircle(ctx, point.x, point.y, 10, "#4169E1");
           

             
            }


            if (this.settings.mobHp) {


                const textWidth = ctx.measureText(mobOne.health).width;

                this.drawTextItems(point.x - textWidth /2, point.y + 24, mobOne.health, ctx, "12px", "yellow");
            }
            if (this.settings.mobDevMode) {
         
                this.drawText(point.x, point.y - 20, mobOne.typeId, ctx);
            }





       
  



        }

        for (const mistsOne of mists) {



            if (!this.settings.mistEnchants[mistsOne.enchant]) {
                continue;

            }

            
            if (this.settings.mistSolo && mistsOne.type == 0 || this.settings.mistDuo == true && misOne.type == 1) {


                const point = this.transformPoint(mistsOne.hX, mistsOne.hY);

                this.drawImageCustom(ctx, point.x, point.y, "mist_" + mistsOne.enchant, 30);
               
            }
   
            
            

        }



    }

}