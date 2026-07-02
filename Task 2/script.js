/* --- HARDWARE-ACCELERATED THREE.JS SIMULATION SCENE INFRASTRUCTURE --- */

// Document Canvas Anchor Identification
const canvasElement = document.getElementById('webgl-canvas');
const renderScene = new THREE.Scene();

// Initialize Perspective Camera Configuration Matrix
const mainCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

// Instantiate System Hardware WebGL Renderer
const webglRenderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true, alpha: true });
webglRenderer.setSize(window.innerWidth, window.innerHeight);
webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* --- ILLUMINATION SYSTEM DISTRIBUTION --- */
// Sharp Neon Cyan High-Intensity Directional Light Array
const cyanDirectionalLight = new THREE.DirectionalLight(0x00ffff, 1.6);
cyanDirectionalLight.position.set(6, 8, 5);
renderScene.add(cyanDirectionalLight);

// Deep Metallic Magenta Ambient Base Glow Layer
const magentaAmbientLight = new THREE.AmbientLight(0xff00ff, 0.45);
renderScene.add(magentaAmbientLight);

/* --- CORE INTERACTIVE GEOMETRIC CYBORG NEXUS COMPONENT ASSEMBLY --- */
// Generate Icosahedron Core Matrix Framework
const structuralGeometry = new THREE.IcosahedronGeometry(3.6, 2);

// Component 1: Inner Holographic Nodes Point Grid Array (Cyan Nodes)
const nodePointsMaterial = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 0.09,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
});
const nexusNodeNetwork = new THREE.Points(structuralGeometry, nodePointsMaterial);
renderScene.add(nexusNodeNetwork);

// Component 2: Outer Wireframe Protective Shell Geometry (Magenta Polygrid Lines)
const shellWireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff00ff,
    wireframe: true,
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending
});
const nexusWireframeShell = new THREE.Mesh(structuralGeometry, shellWireframeMaterial);

// Accurate 2% Scale Accentuating Visual Dimension Depth Seeding
nexusWireframeShell.scale.set(1.02, 1.02, 1.02);
renderScene.add(nexusWireframeShell);

/* --- HUMAN SCROLL-DRIVEN INTERPOLATION TIMELINE MATRIX --- */

// Explicit Camera Navigation Step Struct Arrays Mapping to Layout Sections
const cameraAnimationTimeline = [
    {
        // Stage 01: Hero View Alignment Positions
        posX: -3.0, posY: 0, posZ: 9.5,
        rotX: 0.1, rotY: -0.2, rotZ: 0,
        fov: 60
    },
    {
        // Stage 02: Telemetry Core Zoom Macro Perspective Shifts
        posX: -2.2, posY: 1.5, posZ: 6.0,
        rotX: -0.4, rotY: 0.6, rotZ: 0.2,
        fov: 50
    },
    {
        // Stage 03: Configuration Terminal Extreme Angled Micro Matrix View
        posX: -3.8, posY: -1.8, posZ: 7.5,
        rotX: 0.5, rotY: -0.8, rotZ: -0.4,
        fov: 55
    }
];

// Initialize Active Execution Coordinates
let normalizedScrollPercentage = 0;
let currentInterpolatedTarget = { ...cameraAnimationTimeline[0] };

function computeScrollMetrics() {
    const trackingTotalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (trackingTotalScrollableHeight <= 0) return;
    
    // Calculate current scroll layout percentage range [0.0 - 1.0]
    normalizedScrollPercentage = window.scrollY / trackingTotalScrollableHeight;
    
    // Identify scroll bounds mapping segments across our 3 distinct sections
    const rawTimelineIndex = normalizedScrollPercentage * (cameraAnimationTimeline.length - 1);
    const lowSegmentIndex = Math.floor(rawTimelineIndex);
    const highSegmentIndex = Math.min(lowSegmentIndex + 1, cameraAnimationTimeline.length - 1);
    const segmentInterpolationWeight = rawTimelineIndex - lowSegmentIndex;

    const startKeyframe = cameraAnimationTimeline[lowSegmentIndex];
    const endKeyframe = cameraAnimationTimeline[highSegmentIndex];

    // Compute Linear Interpolation (lerp) for current operational viewport coordinate
    currentInterpolatedTarget.posX = startKeyframe.posX + (endKeyframe.posX - startKeyframe.posX) * segmentInterpolationWeight;
    currentInterpolatedTarget.posY = startKeyframe.posY + (endKeyframe.posY - startKeyframe.posY) * segmentInterpolationWeight;
    currentInterpolatedTarget.posZ = startKeyframe.posZ + (endKeyframe.posZ - startKeyframe.posZ) * segmentInterpolationWeight;
    
    currentInterpolatedTarget.rotX = startKeyframe.rotX + (endKeyframe.rotX - startKeyframe.rotX) * segmentInterpolationWeight;
    currentInterpolatedTarget.rotY = startKeyframe.rotY + (endKeyframe.rotY - startKeyframe.rotY) * segmentInterpolationWeight;
    currentInterpolatedTarget.rotZ = startKeyframe.rotZ + (endKeyframe.rotZ - startKeyframe.rotZ) * segmentInterpolationWeight;
    
    currentInterpolatedTarget.fov = startKeyframe.fov + (endKeyframe.fov - startKeyframe.fov) * segmentInterpolationWeight;
    
    // Update active navbar section highlighters based on scroll bounds
    updateActiveNavigationHighlight(lowSegmentIndex);
}

/* --- HUD INTERFACE NAVIGATION STATE HIGHLIGHTERS --- */
const navInterfaceLinks = document.querySelectorAll('.hud-nav-link');
function updateActiveNavigationHighlight(activeSectionIndex) {
    navInterfaceLinks.forEach((linkNode, indexLoop) => {
        if (indexLoop === activeSectionIndex) {
            linkNode.classList.add('active');
        } else {
            linkNode.classList.remove('active');
        }
    });
}

// Attach Timeline Scroll Listener Hook
window.addEventListener('scroll', computeScrollMetrics);

/* --- INTERACTIVE USER CURSOR POSITION CAPTURE --- */
let mouseVectorX = 0;
let mouseVectorY = 0;
let dynamicallyDampenedMouseX = 0;
let dynamicallyDampenedMouseY = 0;

window.addEventListener('mousemove', (mouseEvent) => {
    // Standardize cursor positioning values mapping onto normalize array range [-1.0 , 1.0]
    mouseVectorX = (mouseEvent.clientX / window.innerWidth) * 2 - 1;
    mouseVectorY = -(mouseEvent.clientY / window.innerHeight) * 2 + 1;
});

/* --- SYSTEM MONITOR RESPONSIBILITY & RESIZE HANDLING --- */
function performViewportAdaptation() {
    const windowWidth = window.innerWidth;
    
    // Dynamic Layout adaptation override logic for mobile breakpoints
    if (windowWidth <= 1280) {
        // Enforce exact centering coordinates behind overlay rows
        cameraAnimationTimeline[0].posX = 0; cameraAnimationTimeline[0].posZ = 10.5;
        cameraAnimationTimeline[1].posX = 0; cameraAnimationTimeline[1].posZ = 8.5;
        cameraAnimationTimeline[2].posX = 0; cameraAnimationTimeline[2].posZ = 9.5;
    } else {
        // Asymmetric restoration metrics configurations for desktop grids
        cameraAnimationTimeline[0].posX = -3.0; cameraAnimationTimeline[0].posZ = 9.5;
        cameraAnimationTimeline[1].posX = -2.2; cameraAnimationTimeline[1].posZ = 6.0;
        cameraAnimationTimeline[2].posX = -3.8; cameraAnimationTimeline[2].posZ = 7.5;
    }

    mainCamera.aspect = windowWidth / window.innerHeight;
    mainCamera.updateProjectionMatrix();
    
    webglRenderer.setSize(windowWidth, window.innerHeight);
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Recalculate states instantly on context transformation
    computeScrollMetrics();
}

window.addEventListener('resize', performViewportAdaptation);
// Execute adaptation setup parameters at launch runtime
performViewportAdaptation();

/* --- OPTIMIZED HIGH-PERFORMANCE ANIMATION RUNLOOP --- */
const runloopClock = new THREE.Clock();

const renderExecutionTick = () => {
    const elapsedDeltaTime = runloopClock.getElapsedTime();

    // Section 1: Programmatic Passive Micro-Rotations
    nexusNodeNetwork.rotation.y = elapsedDeltaTime * 0.13;
    nexusWireframeShell.rotation.y = elapsedDeltaTime * -0.07;
    nexusNodeNetwork.rotation.x = elapsedDeltaTime * 0.05;

    // Section 2: Buttery Physics Mouse Track Smoothing Calculations (Lerp Execution)
    dynamicallyDampenedMouseX += (mouseVectorX - dynamicallyDampenedMouseX) * 0.06;
    dynamicallyDampenedMouseY += (mouseVectorY - dynamicallyDampenedMouseY) * 0.06;

    // Apply interactive skew transforms onto active object matrices
    nexusNodeNetwork.rotation.z = dynamicallyDampenedMouseX * 0.5;
    nexusWireframeShell.rotation.z = dynamicallyDampenedMouseX * 0.5;

    // Section 3: Smooth Scroll-Driven Camera Matrix Interpolation
    mainCamera.position.x += (currentInterpolatedTarget.posX - mainCamera.position.x) * 0.08;
    mainCamera.position.y += (currentInterpolatedTarget.posY - mainCamera.position.y) * 0.08;
    mainCamera.position.z += (currentInterpolatedTarget.posZ - mainCamera.position.z) * 0.08;
    
    mainCamera.rotation.x += (currentInterpolatedTarget.rotX - mainCamera.rotation.x) * 0.08;
    mainCamera.rotation.y += (currentInterpolatedTarget.rotY - mainCamera.rotation.y) * 0.08;
    mainCamera.rotation.z += (currentInterpolatedTarget.rotZ - mainCamera.rotation.z) * 0.08;
    
    if (Math.abs(mainCamera.fov - currentInterpolatedTarget.fov) > 0.01) {
        mainCamera.fov += (currentInterpolatedTarget.fov - mainCamera.fov) * 0.08;
        mainCamera.updateProjectionMatrix();
    }

    // Include subtle automatic mechanical floating physics tracking along the Y-Axis
    const activeMechanicalFloatOffset = Math.sin(elapsedDeltaTime * 1.5) * 0.12;
    nexusNodeNetwork.position.y = (dynamicallyDampenedMouseY * 0.8) + activeMechanicalFloatOffset;
    nexusWireframeShell.position.y = (dynamicallyDampenedMouseY * 0.8) + activeMechanicalFloatOffset;

    // Render operational canvas view sequence updates
    webglRenderer.render(renderScene, mainCamera);

    // Call for next frame callback routine loop mapping 60 FPS performance metrics
    window.requestAnimationFrame(renderExecutionTick);
};

// Fire engine sequence update execution pipeline
renderExecutionTick();