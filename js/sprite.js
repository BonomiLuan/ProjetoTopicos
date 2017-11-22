// um arquivo javascript conversa com o outro sem nenhuma declaracao
var qual_personagem = 1;

function sprite(img, numPersonagem){ // eh a imagem da sprite
    //Atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    this.srcX = this.srcY = 0; // posicao Y
    qual_personagem = numPersonagem;
    if(numPersonagem == 4 || numPersonagem == 5){
        this.width = 128; // largura de cada quadradinho da imagem
        this.height = 128; // autura de cada quadradinho da imagem  
    }else{
        this.width = 256; // largura de cada quadradinho da imagem
        this.height = 256; // autura de cada quadradinho da imagem
    }
    
    this.posX = this.posY = 0; // posicao X
    this.img = img;
    this.speed = 0;
    this.countAnim = 0;
    this.countPos = 0;

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var tamanhoLarg = winWidth * 0.08; // define o tamanho do personagem na tela em px
    var tamanhoAlt = winHeight * 0.18;
    //Metodos
    //Desenha
    this.draw = function(ctx){
        //alert(winHeight - 100);
        if(qual_personagem == 1 || qual_personagem == 5){ 
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, (winWidth * 0.36), (winHeight * 0.8), tamanhoLarg, tamanhoAlt); // mudar depois pra ficar responsivo 
        }else{
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, (winWidth * 0.36), (winHeight * 0.78), tamanhoLarg, tamanhoAlt); // mudar depois pra ficar responsivo 
        }                                                                         //largura             altura
        
        // (winWidth * 0.3) eh a posicao X da imagem no canvas
        // (winHeight * 0.8) eh a posicao Y da imagem no canvas
        // 128 eh o tamanho da imagem no X
        // 128 eh o tamanho da imagem no Y
        this.animation();
    }
    //Move
    this.move = function(){
        if(this.mvLeft){
            this.posX -= this.speed;   // vai para esquerda
            this.srcY = this.height * 2; // colocar em qual linha da matriz esta a imagem
        }else
        if(this.mvRight){
            this.posX += this.speed;   // vai para esquerda
            this.srcY = this.height * 3; // colocar em qual linha da matriz esta a imagem
        }else
        if(this.mvUp){
           this.posX -= this.speed;   // vai para esquerda
            this.srcY = this.height * 1; // colocar em qual linha da matriz esta a imagem
        }else
        if(this.mvDown){
            this.posX -= this.speed;   // vai para esquerda
            this.srcY = this.height * 0; // colocar em qual linha da matriz esta a imagem
        }
    }
    //Anima
    this.animation = function(){
        if(this.mvLeft || this.mvDown || this.mvUp || this.mvRight){
            this.countAnim++;
            if(numPersonagem == 1){
                if(this.countAnim >= 44){ // depende de quantas personagens tem no sprint no caso 11 * 4 = 44
                    this.countAnim = 0;
                }
                this.srcX = Math.floor(this.countAnim / 11) * this.width; // mudar a velocidade da animacao, no caso ta 11
            }
            if(numPersonagem == 2){
                if(this.countAnim >= 70){ // depende de quantas personagens tem no sprint no caso 11 * 7 = 77
                    this.countAnim = 0;
                }
                this.srcX = Math.floor(this.countAnim / 10) * this.width; // mudar a velocidade da animacao, no caso ta 11
            }
            if(numPersonagem == 3){
                if(this.countAnim >= 77){ // depende de quantas personagens tem no sprint no caso 11 * 7 = 77
                    this.countAnim = 0;
                }
                this.srcX = Math.floor(this.countAnim / 11) * this.width; // mudar a velocidade da animacao, no caso ta 11
            }
            if(numPersonagem == 4){
                if(this.countAnim >= 48){ // depende de quantas personagens tem no sprint no caso 8 * 6 = 48
                    this.countAnim = 0;
                }
                this.srcX = Math.floor(this.countAnim / 8) * this.width; // mudar a velocidade da animacao, no caso ta 8
            }
            if(numPersonagem == 5){
                if(this.countAnim >= 80){ // depende de quantas personagens tem no sprint no caso 8 * 6 = 48
                    this.countAnim = 0;
                }
                this.srcX = Math.floor(this.countAnim / 8) * this.width; // mudar a velocidade da animacao, no caso ta 8
            }
        }
    }
    
}
