/* --- VELOCITY PARALLAX ENGINE REGULATION BLOCKS --- */

document.addEventListener('DOMContentLoaded', () => {

    // Frame Cache Elements Queries
    const structuralSections = document.querySelectorAll('.parallax-section');
    const interfaceProgressDots = document.querySelectorAll('.progress-dot');
    const primaryNavItems = document.querySelectorAll('.menu-item');
    const structuralObserverTargets = document.querySelectorAll('.reveal-init');

    // System Variable Calculations
    let currentGlobalScrollY = window.scrollY;
    let animationFrameLock = false;
    let isDeviceMobile = window.innerWidth < 1025;

    /**
     * Window metrics transformation fallback engine loop.
     * Maps calculated spatial depths over target graphic nodes.
     */
    function processViewportParallax() {
        // Safe operational exit boundary if execution metrics shift to mobile scale profiles
        if (isDeviceMobile) {
            animationFrameLock = false;
            return;
        }

        // Velocity coefficients mapping depth calculations
        const backgroundDepthFactor = 0.35;
        const foregroundOffsetFactor = -0.05;

        structuralSections.forEach(section => {
            const boundaryTop = section.offsetTop;
            const boundaryHeight = section.offsetHeight;

            // Operational performance constraint checking visibility limits
            if (currentGlobalScrollY + window.innerHeight >= boundaryTop && currentGlobalScrollY <= boundaryTop + boundaryHeight) {
                
                // Track relative transformation bounds specific to section coordinates
                const localizedScrollOffset = currentGlobalScrollY - boundaryTop;
                
                const backgroundAsset = section.querySelector('.parallax-layer.background');
                const foregroundContent = section.querySelector('.foreground-content');

                if (backgroundAsset) {
                    const bgTranslationVector = localizedScrollOffset * backgroundDepthFactor;
                    backgroundAsset.style.transform = `translate3d(0px, ${bgTranslationVector}px, 0px)`;
                }

                if (foregroundContent) {
                    const fgTranslationVector = localizedScrollOffset * foregroundOffsetFactor;
                    foregroundContent.style.transform = `translate3d(0px, ${fgTranslationVector}px, 0px)`;
                }
            }
        });

        // Update fixed layout HUD anchors continuously during runtime scroll sweeps
        evaluateActiveSectionTimeline();

        // Release rendering lock safely
        animationFrameLock = false;
    }

    // Monitor application scroll triggers
    window.addEventListener('scroll', () => {
        currentGlobalScrollY = window.scrollY;

        // Queue rendering execution frames smoothly into standard monitor frame cycles
        if (!animationFrameLock) {
            window.requestAnimationFrame(processViewportParallax);
            animationFrameLock = true;
        }
    }, { passive: true }); // Passive flag configuration fully mitigates touch/scroll tracking bottlenecks

    /**
     * Determines the currently active layout section visible in the user's viewport
     * and maps highlight classes to HUD layout markers.
     */
    function evaluateActiveSectionTimeline() {
        let activeIdentity = 'welcome';
        const evaluationHorizonLine = currentGlobalScrollY + (window.innerHeight / 3);

        structuralSections.forEach(section => {
            const topBoundary = section.offsetTop;
            const bottomBoundary = topBoundary + section.offsetHeight;

            if (evaluationHorizonLine >= topBoundary && evaluationHorizonLine < bottomBoundary) {
                activeIdentity = section.getAttribute('id');
            }
        });

        // Sync vertical right-aligned docking dots
        interfaceProgressDots.forEach(dot => {
            if (dot.getAttribute('data-anchor') === activeIdentity) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Sync header navbar item classes
        primaryNavItems.forEach(item => {
            const itemTargetId = item.getAttribute('href')?.substring(1);
            if (itemTargetId === activeIdentity) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    /* --- NATIVE INTERSECTION OBSERVER STRUCTURAL ANIMATIONS --- */
    const intersectionThresholdOptions = {
        root: null,          // Maps calculations directly over parent window viewports
        threshold: 0.15,     // Executes functions at 15% visibility markers
        rootMargin: "0px"
    };

    const coreEntranceObserver = new IntersectionObserver((observedEntries) => {
        observedEntries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in-view');
                // Drop observer mapping for targets once visual activation transitions finish
                coreEntranceObserver.unobserve(entry.target);
            }
        });
    }, intersectionThresholdOptions);

    // Apply viewport appearance listening targets across foreground text objects
    structuralObserverTargets.forEach(element => {
        coreEntranceObserver.observe(element);
    });

    /* --- DOCK CLICK SMOOTH TARGET INTERACTIONS --- */
    interfaceProgressDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const targetAnchorId = this.getAttribute('data-anchor');
            const targetNodeElement = document.getElementById(targetAnchorId);
            
            if (targetNodeElement) {
                window.scrollTo({
                    top: targetNodeElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- BREAKPOINT RESIZING MONITOR SECURITY SYSTEM --- */
    window.addEventListener('resize', () => {
        const structuralLayoutWidth = window.innerWidth;
        isDeviceMobile = structuralLayoutWidth < 1025;

        // Completely reset transform strings on structural elements if layout context defaults to mobile profiles
        if (isDeviceMobile) {
            structuralSections.forEach(section => {
                const backgroundAsset = section.querySelector('.parallax-layer.background');
                const foregroundContent = section.querySelector('.foreground-content');
                if (backgroundAsset) backgroundAsset.style.transform = 'none';
                if (foregroundContent) foregroundContent.style.transform = 'none';
            });
        }
    });

    // Invoke initial configuration scans immediately upon application launch sequence completion
    evaluateActiveSectionTimeline();
});