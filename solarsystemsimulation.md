This shows the implementation of object-oriented programming in Javascript combined with the display of the effects of gravitation on the Solar System
<head>
    <style>
        #solar-system {
            width: 600px;
            height: 600px;
            position: relative;
            border: 1px solid black;
            margin: 0 auto;
        }
        .planet {
            position: absolute;
            border-radius: 50%;
        }
        #sun {
            background-color: yellow;
            width: 80px;
            height: 80px;
            top: 260px;
            left: 260px;
        }
        .mercury {
            background-color: gray;
            width: 20px;
            height: 20px;
        }
        .venus {
            background-color: orange;
            width: 30px;
            height: 30px;
        }
        .earth {
            background-color: dodgerblue;
            width: 40px;
            height: 40px;
        }
        .mars {
            background-color: orangered;
            width: 35px;
            height: 35px;
        }
    </style>
</head>
<body>
    <div id="solar-system"></div>
    <script>
        class Planet {
            constructor(name, diameter, color, orbitRadius, speed) {
                this.name = name;
                this.diameter = diameter;
                this.color = color;
                this.orbitRadius = orbitRadius;
                this.speed = speed;
                this.angle = 0;
                this.element = null;
            }       
            create() {
                this.element = document.createElement("div");
                this.element.className = "planet " + this.name.toLowerCase();
                this.element.style.backgroundColor = this.color;
                this.element.style.width = this.diameter + "px";
                this.element.style.height = this.diameter + "px";
                document.getElementById("solar-system").appendChild(this.element);
            }    
            animate() {
                setInterval(() => {
                    this.angle += this.speed;
                    const centerX = 300;
                    const centerY = 300;
                    const x = centerX + this.orbitRadius * Math.cos(this.angle);
                    const y = centerY + this.orbitRadius * Math.sin(this.angle);      
                    this.element.style.left = x + "px";
                    this.element.style.top = y + "px";
                }, 20);
            }
        }
        const sun = new Planet("sun", 80, "yellow", 0, 0);
        const mercury = new Planet("mercury", 20, "gray", 100, 0.03);
        const venus = new Planet("venus", 30, "orange", 150, 0.02);
        const earth = new Planet("earth", 40, "dodgerblue", 200, 0.015);
        const mars = new Planet("mars", 35, "orangered", 250, 0.01);
        sun.create();
        mercury.create();
        venus.create();
        earth.create();
        mars.create();
        sun.animate();
        mercury.animate();
        venus.animate();
        earth.animate();
        mars.animate();
    </script>
</body>
