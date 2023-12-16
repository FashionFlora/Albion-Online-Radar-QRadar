export class PlayersDrawing extends DrawingUtils  {


    constructor(Settings) {

        super(Settings);

        this.itemsInfo = {};
        this.images = {};
  
    }

    updateItemsInfo(newData) {
        this.itemsInfo = newData;
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


    drawItems(context,canvas, players ,  devMode) {

        let posY = 15;

        if (players.length <= 0) {
            this.images = {};
        }
      

        for (const playerOne of players) {

            


            const items = playerOne.items;

            if (items === null) {
                continue;

            } 

            let posX = 5;


            
            const  total = posY + 20;
            if (total > canvas.height) {
                break;
            }
            const nickname = playerOne.nickname;

    
            this.drawTextItems(posX, posY, nickname, context, "14px", "white");

            let posTemp = posX + context.measureText(nickname).width + 10;


            this.drawTextItems(posTemp, posY, playerOne.currentHealth + "/" + playerOne.initialHealth, context, "14px", "red");

            posTemp += context.measureText(playerOne.currentHealth + "/" + playerOne.initialHealth).width + 10;
  
            let itemString = "";

            posY += 5;
            for (const item of items) {

                itemString += item + " ";
                


                const src = "/images/Items/" + this.itemsInfo[item] + ".png";
                if (src.includes("undefined")) {
                    continue;
                }
                if (this.images[src]) {
                    context.drawImage(this.images[src], posX, posY, 40, 40);
                }
                else {
                    this.preloadImageAndAddToList(src);
                }

        
                 
              
                posX += 10 + 40;


            }
            if (devMode) {
                this.drawTextItems(posTemp, posY - 5, itemString, context, "14px", "white");
            }
      
            posX = 0;
            posY += 50;

     

         


       

        }

    }
    
    interpolate(players, lpX, lpY ,t ) {



        for (const playerOne of players) {






            const  hX = -1 * playerOne.posX + lpX;
            const  hY = playerOne.posY - lpY;
            let distance = Math.round(Math.sqrt(((playerOne.posX - lpX) * (playerOne.posX - lpX)) + ((playerOne.posY - lpY) * (playerOne.posY - lpY))));
            playerOne.distance = distance;
            if (playerOne.hY == 0 && playerOne.hX == 0) {
                playerOne.hX = hX;
                playerOne.hY = hY;

            }
            



            playerOne.hX = this.lerp(playerOne.hX, hX, t);
            playerOne.hY = this.lerp(playerOne.hY, hY, t);





        }

    }
    invalidate(context, players) {

 


        for (const playerOne of players) {

            

            const point = this.transformPoint(playerOne.hX, playerOne.hY);
            let space = 0;


            if (this.settings.settingDot == true) {
                this.drawFilledCircle(context, point.x, point.y, 10, "red");
            }
            if (this.settings.settingMounted) {
                if (playerOne.mounted) {
                    this.drawText(point.x, point.y +3, "M", context);
                }
       
            }
            if (this.settings.settingNickname == true) {

                space = space + 20;
                this.drawText(point.x, point.y + space, playerOne.nickname, context);
            }
            if (this.settings.settingDistance) {

       
                this.drawText(point.x, point.y - 14, playerOne.distance +"m", context);
            }

            if (this.settings.settingHealth) {

                space = space + 6;

                const percent = playerOne.currentHealth / playerOne.initialHealth;
                let width = 60;
                let height = 7;

                context.fillStyle = "#121317";
                context.fillRect(point.x - width / 2, point.y - height / 2 + space, width, height);

                context.fillStyle = "red";
                context.fillRect(point.x - width/2, point.y - height/2 + space, width * percent, height);
             //   this.drawText(point.x, point.y + space, playerOne.currentHealth, context);
            }
            if (this.settings.settingGuild) {
                space = space + 14;

                if (playerOne.guildName != "undefined") {


                    this.drawText(point.x, point.y + space, playerOne.guildName, context);
                }
                
       
            }
            
        

        }


    }
    
}
