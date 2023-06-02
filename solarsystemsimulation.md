This shows the implementation of object-oriented programming in Javascript combined with the display of the effects of gravitation on the Solar System
<head>
  <title>Hectic 6 Solar System Simulation</title>
  <style>
    #solar-system {
      position: relative;
      width: 600px;
      height: 600px;
      margin: 0 auto;
      border: 1px solid black;
      border-radius: 50%;
      overflow: hidden;
    }
    
    .planet {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: gray;
      transition: transform 1s;
    }
    
    #sun {
      width: 60px;
      height: 60px;
      background-color: yellow;
      border-radius: 50%;
    }
    
    #sun:hover {
      transform: scale(1.2);
    }
    
    #mercury {
      background-color: #C0C0C0;
      animation: orbit-mercury 4s linear infinite;
    }
    
    #venus {
      background-color: #FFA500;
      animation: orbit-venus 6s linear infinite;
    }
    
    #earth {
      background-color: #6495ED;
      animation: orbit-earth 8s linear infinite;
    }
    
    #mars {
      background-color: #FF4500;
      animation: orbit-mars 10s linear infinite;
    }
    
    #jupiter {
      background-color: #F4A460;
      animation: orbit-jupiter 14s linear infinite;
    }
    
    #saturn {
      background-color: #CD853F;
      animation: orbit-saturn 16s linear infinite;
    }
    
    #uranus {
      background-color: #00CED1;
      animation: orbit-uranus 18s linear infinite;
    }
    
    #neptune {
      background-color: #00008B;
      animation: orbit-neptune 20s linear infinite;
    }
    
    .planet:hover {
      transform: scale(1.2);
    }
    
    @keyframes orbit-mercury {
      0% {
        transform: rotate(0deg) translateX(120px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(120px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-venus {
      0% {
        transform: rotate(0deg) translateX(180px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(180px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-earth {
      0% {
        transform: rotate(0deg) translateX(240px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(240px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-mars {
      0% {
        transform: rotate(0deg) translateX(300px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(300px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-jupiter {
      0% {
        transform: rotate(0deg) translateX(360px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(360px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-saturn {
      0% {
        transform: rotate(0deg) translateX(420px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(420px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-uranus {
      0% {
        transform: rotate(0deg) translateX(480px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(480px) rotate(-360deg);
      }
    }
    
    @keyframes orbit-neptune {
      0% {
        transform: rotate(0deg) translateX(540px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(540px) rotate(-360deg);
      }
    }
  </style>
</head>
<body>
  <div id="solar-system"></div>
  <div id="planet-description"></div>

  <script>
    class Planet {
      constructor(id, radius, color, orbitDuration, description, mass, orbitalPeriod) {
        this.id = id;
        this.radius = radius;
        this.color = color;
        this.orbitDuration = orbitDuration;
        this.description = description;
        this.mass = mass;
        this.orbitalPeriod = orbitalPeriod;
      }

      createPlanetElement() {
        const planetElement = document.createElement('div');
        planetElement.id = this.id;
        planetElement.className = 'planet';
        planetElement.title = this.getDescription();
        planetElement.style.backgroundColor = this.color;
        planetElement.style.width = this.radius + 'px';
        planetElement.style.height = this.radius + 'px';
        return planetElement;
      }

      startOrbitAnimation() {
        const keyframes = `orbit-${this.id} ${this.orbitDuration}s linear infinite`;
        document.getElementById(this.id).style.animation = keyframes;
      }

      getDescription() {
        return `
          ${this.description}
          Radius: ${this.radius} km
          Mass: ${this.mass} kg
          Orbital Period: ${this.orbitalPeriod} days
        `;
      }
    }

    const solarSystem = document.getElementById('solar-system');
    const description = document.getElementById('planet-description');

    const sun = new Planet('sun', 60, 'yellow', 0, 'The Sun', '1.989 × 10^30', 'N/A');
    const mercury = new Planet('mercury', 30, '#C0C0C0', 4, 'Mercury', '3.3011 × 10^23', '87.97');
    const venus = new Planet('venus', 30, '#FFA500', 6, 'Venus', '4.867 × 10^24', '224.70');
    const earth = new Planet('earth', 30, '#6495ED', 8, 'Earth', '5.972 × 10^24', '365.25');
    const mars = new Planet('mars', 30, '#FF4500', 10, 'Mars', '6.39 × 10^23', '687');
    const jupiter = new Planet('jupiter', 30, '#F4A460', 14, 'Jupiter', '1.898 × 10^27', '4,332.59');
    const saturn = new Planet('saturn', 30, '#CD853F', 16, 'Saturn', '5.683 × 10^26', '10,759.22');
    const uranus = new Planet('uranus', 30, '#00CED1', 18, 'Uranus', '8.681 × 10^25', '30,688.50');
    const neptune = new Planet('neptune', 30, '#00008B', 20, 'Neptune', '1.024 × 10^26', '60,182');

    solarSystem.appendChild(sun.createPlanetElement());
    solarSystem.appendChild(mercury.createPlanetElement());
    solarSystem.appendChild(venus.createPlanetElement());
    solarSystem.appendChild(earth.createPlanetElement());
    solarSystem.appendChild(mars.createPlanetElement());
    solarSystem.appendChild(jupiter.createPlanetElement());
    solarSystem.appendChild(saturn.createPlanetElement());
    solarSystem.appendChild(uranus.createPlanetElement());
    solarSystem.appendChild(neptune.createPlanetElement());

    const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

    planets.forEach(planet => {
      planet.startOrbitAnimation();
      planet.createPlanetElement().addEventListener('mouseover', function() {
        description.textContent = planet.getDescription();
      });
      planet.createPlanetElement().addEventListener('mouseout', function() {
        description.textContent = '';
      });
    });
  </script>
</body>
