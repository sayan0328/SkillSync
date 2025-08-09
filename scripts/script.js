const cardContainer = document.getElementById("cardContainer");
const skillCards = document.querySelectorAll(".Skillcards");
let isHovering = false;
let isMouseDown = false;
let startX = 0;
let scrollLeft = 0;
let clickStartTime = 0;
let dragThreshold = 5;
let isDragging = false;
let currentScroll = 0;
let targetScroll = 0;

function initializeScrolling() {
    cardContainer.classList.add("scroll-enabled");
    cardContainer.style.scrollBehavior = "auto";

    currentScroll = cardContainer.scrollLeft;
    targetScroll = currentScroll;

    smoothScrollLoop();

    cardContainer.addEventListener("mousedown", handleMouseDown);
    cardContainer.addEventListener("mouseleave", handleContainerMouseLeave);
    cardContainer.addEventListener("mouseup", handleMouseUp);
    cardContainer.addEventListener("mousemove", handleMouseMove);

    console.log("Smooth interpolation scroll initialized");
}

skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        isHovering = true;
        card.style.cursor = "grab";
    });

    card.addEventListener("mouseleave", () => {
        isHovering = false;
        isMouseDown = false;
        card.style.cursor = "default";
    });
});

function handleWheel(e) {
    console.log("Mouse wheel scroll disabled");
}

function handleMouseDown(e) {
    if (!isHovering) return;

    isMouseDown = true;
    clickStartTime = Date.now();
    startX = e.pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
    currentScroll = scrollLeft;
    targetScroll = scrollLeft;

    e.target.style.cursor = "grabbing";
    e.preventDefault();
}

function handleMouseUp(e) {
    if (isMouseDown && isHovering) {
        const clickDuration = Date.now() - clickStartTime;
        const currentX = e.pageX - cardContainer.offsetLeft;
        const distanceMoved = Math.abs(currentX - startX);

        if (clickDuration < 200 && distanceMoved < dragThreshold) {
            console.log("Registered as click on card");
        } else {
            console.log("Registered as smooth drag on card");
        }
    }

    isMouseDown = false;
    isDragging = false;

    if (isHovering) {
        e.target.style.cursor = "grab";
    } else {
        e.target.style.cursor = "default";
    }
}

function handleContainerMouseLeave() {
    isMouseDown = false;
    isDragging = false;

    skillCards.forEach((card) => {
        card.style.cursor = "default";
    });
}

function handleMouseMove(e) {
    if (!isMouseDown || !isHovering) return;

    e.preventDefault();
    isDragging = true;

    const currentX = e.pageX - cardContainer.offsetLeft;
    const deltaX = currentX - startX;

    targetScroll = scrollLeft - deltaX;
}

function smoothScrollLoop() {
    const smoothness = 0.15;

    const diff = targetScroll - currentScroll;

    if (Math.abs(diff) > 0.1) {
        currentScroll += diff * smoothness;
        cardContainer.scrollLeft = currentScroll;
    } else {
        currentScroll = targetScroll;
        cardContainer.scrollLeft = currentScroll;
    }

    requestAnimationFrame(smoothScrollLoop);
}

initializeScrolling();

document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.getElementById("cardsContainer");
    const profileCards = document.querySelectorAll(".profile-card");

    if (!cardsContainer) {
        console.error("Element with ID 'cardsContainer' not found");
        return;
    }

    if (profileCards.length === 0) {
        console.error("No elements with class 'profile-card' found");
        return;
    }

    let isHovering = false;
    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let clickStartTime = 0;
    let dragThreshold = 5;
    let isDragging = false;
    let currentScroll = 0;
    let targetScroll = 0;

    function initializeScrolling() {
        cardsContainer.classList.add("scroll-enabled");
        cardsContainer.style.scrollBehavior = "auto";

        currentScroll = cardsContainer.scrollLeft;
        targetScroll = currentScroll;

        smoothScrollLoop();

        cardsContainer.addEventListener("mousedown", handleMouseDown);
        cardsContainer.addEventListener(
            "mouseleave",
            handleContainerMouseLeave
        );
        cardsContainer.addEventListener("mouseup", handleMouseUp);
        cardsContainer.addEventListener("mousemove", handleMouseMove);

        console.log("Smooth interpolation scroll initialized");
    }

    profileCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            isHovering = true;
            card.style.cursor = "grab";
        });

        card.addEventListener("mouseleave", () => {
            isHovering = false;
            isMouseDown = false;
            card.style.cursor = "default";
        });
    });

    function handleWheel(e) {
        console.log("Mouse wheel scroll disabled");
    }

    function handleMouseDown(e) {
        if (!isHovering) return;

        isMouseDown = true;
        clickStartTime = Date.now();
        startX = e.pageX - cardsContainer.offsetLeft;
        scrollLeft = cardsContainer.scrollLeft;
        currentScroll = scrollLeft;
        targetScroll = scrollLeft;

        e.target.style.cursor = "grabbing";
        e.preventDefault();
    }

    function handleMouseUp(e) {
        if (isMouseDown && isHovering) {
            const clickDuration = Date.now() - clickStartTime;
            const currentX = e.pageX - cardsContainer.offsetLeft;
            const distanceMoved = Math.abs(currentX - startX);

            if (clickDuration < 200 && distanceMoved < dragThreshold) {
                console.log("Registered as click on card");
            } else {
                console.log("Registered as smooth drag on card");
            }
        }

        isMouseDown = false;
        isDragging = false;

        if (isHovering) {
            e.target.style.cursor = "grab";
        } else {
            e.target.style.cursor = "default";
        }
    }

    function handleContainerMouseLeave() {
        isMouseDown = false;
        isDragging = false;

        profileCards.forEach((card) => {
            card.style.cursor = "default";
        });
    }

    function handleMouseMove(e) {
        if (!isMouseDown || !isHovering) return;

        e.preventDefault();
        isDragging = true;

        const currentX = e.pageX - cardsContainer.offsetLeft;
        const deltaX = currentX - startX;

        targetScroll = scrollLeft - deltaX;
    }

    function smoothScrollLoop() {
        const smoothness = 0.15;

        const diff = targetScroll - currentScroll;

        if (Math.abs(diff) > 0.1) {
            currentScroll += diff * smoothness;
            cardsContainer.scrollLeft = currentScroll;
        } else {
            currentScroll = targetScroll;
            cardsContainer.scrollLeft = currentScroll;
        }

        requestAnimationFrame(smoothScrollLoop);
    }

    initializeScrolling();
});

// Search button functionality
function scrollToSkillMasters() {
    const skillMastersSection = document.querySelector(".SkillMasters");
    skillMastersSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// Team name cycling functionality
const teamNames = [
    "Team Naksatra",
    "Parnab Bagchi",
    "Sayan Basak",
    "Soumik Ghosh",
    "Rupam Samanta",
    "Shankhadeep Paria",
];

let currentIndex = 0;
const teamNameElement = document.getElementById("teamName");

// Auto-cycle through names every 1 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % teamNames.length;
    teamNameElement.textContent = teamNames[currentIndex];
}, 1000);

// Optional: Keep click functionality for manual cycling
teamNameElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teamNames.length;
    teamNameElement.textContent = teamNames[currentIndex];
});

// SIMPLIFIED LOADER - NO PRELOADING, JUST SHOW CONTENT QUICKLY
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("mainContent");

    // Simple timing - show content after 1.5 seconds
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            mainContent.style.display = "block";
            setTimeout(() => {
                mainContent.style.opacity = "1";
            }, 50);
        }, 500);
    }, 1500); // 1.5 second loader time
});

// Enhanced mobile touch support - KEEP AS IS
function addMobileTouchSupport() {
    const containers = [
        cardContainer,
        document.getElementById("cardsContainer"),
    ];

    containers.forEach((container) => {
        if (!container) return;

        let startTouch = null;
        let isScrolling = false;

        container.addEventListener(
            "touchstart",
            (e) => {
                startTouch = e.touches[0];
                isScrolling = false;
            },
            { passive: true }
        );

        container.addEventListener(
            "touchmove",
            (e) => {
                if (!startTouch) return;

                const currentTouch = e.touches[0];
                const deltaX = Math.abs(
                    currentTouch.clientX - startTouch.clientX
                );
                const deltaY = Math.abs(
                    currentTouch.clientY - startTouch.clientY
                );

                if (deltaX > deltaY && deltaX > 10) {
                    e.preventDefault();
                    isScrolling = true;
                }
            },
            { passive: false }
        );

        container.addEventListener(
            "touchend",
            () => {
                startTouch = null;
                isScrolling = false;
            },
            { passive: true }
        );
    });
}

// Initialize mobile support when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addMobileTouchSupport);
} else {
    addMobileTouchSupport();
}

// Optimize scroll performance for mobile - KEEP AS IS
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        document.documentElement.style.setProperty(
            "--animation-duration",
            "0.2s"
        );

        [cardContainer, document.getElementById("cardsContainer")].forEach(
            (container) => {
                if (container) {
                    container.style.webkitOverflowScrolling = "touch";
                }
            }
        );
    }
}

// Run on load and resize
window.addEventListener("load", optimizeForMobile);
window.addEventListener("resize", optimizeForMobile);
