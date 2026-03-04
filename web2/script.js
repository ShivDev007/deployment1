/* DevOps Keywords */

const keywords = [
    "Docker",
    "Linux",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitOps",
    "Grafana",
    "Nginx",
    "Load Balancer",
    "API Gateway"
]

const flow = document.getElementById("flow")

function createWord() {

    let el = document.createElement("div")

    el.className = "keyword"

    el.innerText = keywords[Math.floor(Math.random() * keywords.length)]

    el.style.top = Math.random() * 100 + "vh"

    el.style.animationDuration = (10 + Math.random() * 10) + "s"

    flow.appendChild(el)

    setTimeout(() => {
        el.remove()
    }, 20000)

}

setInterval(createWord, 800)


/* typing animation */

function typeEffect(text) {

    let result = document.getElementById("result")

    result.innerHTML = ""

    let i = 0

    let typing = setInterval(() => {

        if (i < text.length) {

            result.innerHTML += text.charAt(i)

            i++

        }

        else {

            clearInterval(typing)

        }

    }, 50)

}

function showName() {

    let name = document.getElementById("nameInput").value

    if (name.trim() != "") {

        typeEffect("DevOps Engineer " + name + " 🚀")

    }

}



/* NETWORK LINES BACKGROUND */

const canvas = document.getElementById("network")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth

canvas.height = window.innerHeight

let particles = []

for (let i = 0; i < 70; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.5,

        vy: (Math.random() - 0.5) * 0.5

    })

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let p of particles) {

        p.x += p.vx

        p.y += p.vy

        ctx.beginPath()

        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)

        ctx.fillStyle = "#38bdf8"

        ctx.fill()

    }

    for (let i = 0; i < particles.length; i++) {

        for (let j = i + 1; j < particles.length; j++) {

            let dx = particles[i].x - particles[j].x

            let dy = particles[i].y - particles[j].y

            let dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 120) {

                ctx.beginPath()

                ctx.moveTo(particles[i].x, particles[i].y)

                ctx.lineTo(particles[j].x, particles[j].y)

                ctx.strokeStyle = "rgba(56,189,248,0.1)"

                ctx.stroke()

            }

        }

    }

    requestAnimationFrame(draw)

}

draw()