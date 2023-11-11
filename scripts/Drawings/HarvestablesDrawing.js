export class HarvestablesDrawing extends DrawingUtils  {


    constructor(Settings) {

        super(Settings);
    
    }
    
    interpolate(harvestables, lpX, lpY ,t ) {

    


        for (const harvestableOne of harvestables) {





            
            const hX = -1 * harvestableOne.posX + lpX;
            const hY = harvestableOne.posY - lpY;

       
            if (harvestableOne.hY == 0 && harvestableOne.hX == 0) {
                harvestableOne.hX = hX;
                harvestableOne.hY = hY;

            }
            



            harvestableOne.hX = this.lerp(harvestableOne.hX, hX, t);
            harvestableOne.hY = this.lerp(harvestableOne.hY, hY, t);
            





        }

    }
    invalidate(ctx, harvestables) {


    

  
        for (const harvestableOne of harvestables) {

            if (harvestableOne.size <=0) {
                continue;

            }

            
            if (!this.settings.harvestingTiers[harvestableOne.tier - 1]) {
                continue;
            }


            if (!this.settings.harvestingEnchants[harvestableOne.charges]) {
                continue;
            }
            

            const type = harvestableOne.type;

            let draw = "";

            if (this.settings.harvestingFiber && (type >= 11 && type <= 14)) {

                draw = "fiber_" + harvestableOne.tier + "_" + harvestableOne.charges;
            }
            else if (this.settings.harvestingWood && (type >= 0 && type <= 5)) {

                draw = "Logs_" + harvestableOne.tier + "_" + harvestableOne.charges;
            }

            else if (this.settings.harvestingRock && (type >= 6 && type <= 10)) {

                draw = "rock_" + harvestableOne.tier + "_" + harvestableOne.charges;
            }
            
            else if (this.settings.harvestingHide && (type >= 15 && type <= 22))
            {

                draw = "hide_" + harvestableOne.tier + "_" + harvestableOne.charges;
            }
            else if (this.settings.harvestingOre && (type >= 23 && type <= 27)){

                draw = "ore_" + harvestableOne.tier + "_" + harvestableOne.charges;
            }


            const point = this.transformPoint(harvestableOne.hX, harvestableOne.hY);

            if (draw.length > 2) {
                this.drawImageCustom(ctx, point.x, point.y, draw, 50);
            }

            if (this.settings.harvestingSize) {

                this.drawText(point.x, point.y +25 + 10, harvestableOne.size, ctx);

            }
          
        

        }
        


    }
    
}