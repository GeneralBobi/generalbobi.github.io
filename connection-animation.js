/**
 * Simplified Connection Animation for Socials Page
 * A minimal representation of digital connections
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('connection-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Resize handler
    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });

    // Node class - simplified
    class Node {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.color = 'rgba(255, 255, 255, 0.8)';
        }

        update() {
            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x <= this.radius || this.x >= width - this.radius) {
                this.vx *= -1;
                this.x = Math.max(this.radius, Math.min(width - this.radius, this.x));
            }

            if (this.y <= this.radius || this.y >= height - this.radius) {
                this.vy *= -1;
                this.y = Math.max(this.radius, Math.min(height - this.radius, this.y));
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create nodes - fewer for minimalism
    const nodeCount = 8;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
        const radius = 2;
        const x = radius + Math.random() * (width - radius * 2);
        const y = radius + Math.random() * (height - radius * 2);
        nodes.push(new Node(x, y, radius));
    }

    // Draw function
    function draw() {
        // Clear canvas with slight background for subtle trail
        ctx.fillStyle = 'rgba(18, 18, 24, 0.2)';
        ctx.fillRect(0, 0, width, height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw(ctx);
        });

        // Draw connections - simplified
        const connectionDistance = width * 0.3;

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const node1 = nodes[i];
                const node2 = nodes[j];

                const dx = node2.x - node1.x;
                const dy = node2.y - node1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    // Simple gradient line
                    const gradient = ctx.createLinearGradient(
                        node1.x, node1.y, node2.x, node2.y
                    );
                    gradient.addColorStop(0, 'rgba(110, 86, 207, 0.4)');
                    gradient.addColorStop(1, 'rgba(62, 155, 192, 0.4)');

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;

                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    ctx.stroke();
                }
            }
        }

        // Loop animation
        requestAnimationFrame(draw);
    }

    // Start animation
    draw();
});
