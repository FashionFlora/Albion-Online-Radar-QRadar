export class ChestsDrawing extends DrawingUtils {


    constructor(Settings) {

        super(Settings);

    }

    interpolate(chests, lpX, lpY, t) {




        for (const chestOne of chests) {






            const hX = -1 * chestOne.posX + lpX;
            const hY = chestOne.posY - lpY;


            if (chestOne.hY == 0 && chestOne.hX == 0) {
                chestOne.hX = hX;
                chestOne.hY = hY;

            }




            chestOne.hX = this.lerp(chestOne.hX, hX, t);
            chestOne.hY = this.lerp(chestOne.hY, hY, t);






        }

    }
    invalidate(ctx, chests) {


         


        for (const chestOne of chests ) {

    

            const point = this.transformPoint(chestOne.hX, chestOne.hY);

 
            if (this.settings.chestGreen && chestOne.chestName.toLowerCase().includes("green") || chestOne.chestName.toLowerCase().includes("standard")) {
                this.drawImageCustom(ctx, point.x, point.y, "green", 50);
            }

            else if (this.settings.chestGreen && chestOne.chestName.toLowerCase().includes("uncommon") || chestOne.chestName.toLowerCase().includes("blue")) {
                this.drawImageCustom(ctx, point.x, point.y, "blue", 50);
            }

            else if (this.settings.chestGreen && chestOne.chestName.toLowerCase().includes("rare") || chestOne.chestName.toLowerCase().includes("purple")) {
                this.drawImageCustom(ctx, point.x, point.y, "rare", 50);
            }

            else if (this.settings.chestGreen && chestOne.chestName.toLowerCase().includes("legendary") || chestOne.chestName.toLowerCase().includes("yellow")) {
                this.drawImageCustom(ctx, point.x, point.y, "legendary", 50);
            }

        }



    }

}