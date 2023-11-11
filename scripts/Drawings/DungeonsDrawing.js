export class DungeonsDrawing extends DrawingUtils {


    constructor(Settings) {

        super(Settings);

    }

    interpolate(dungeons, lpX, lpY, t) {




        for (const dungoenOne of dungeons) {
            const hX = -1 * dungoenOne.posX + lpX;
            const hY = dungoenOne.posY - lpY;
            if (dungoenOne.hY == 0 && dungoenOne.hX == 0) {
                dungoenOne.hX = hX;
                dungoenOne.hY = hY;

            }
            dungoenOne.hX = this.lerp(dungoenOne.hX, hX, t);
            dungoenOne.hY = this.lerp(dungoenOne.hY, hY, t);
        }






    }
    invalidate(ctx,  dungeons) {


        for (const dungeonOne of dungeons) {

            
            if (!this.settings.dungeonEnchants[dungeonOne.enchant]) {
                continue;

            }
    
        




            const point = this.transformPoint(dungeonOne.hX, dungeonOne.hY);
            if (dungeonOne.name != "undefined") {
                if (dungeonOne.name.toLowerCase().includes("corrupt")) {
                    this.drawImageCustom(ctx, point.x, point.y, "corrupt", 40);
                }
                else {
                    this.drawImageCustom(ctx, point.x, point.y, "dungeon_" + dungeonOne.enchant, 40);
                }

            }
        
     

        }








    }

}