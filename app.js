try {
    const isInIframe = window.self !== window.top;
    const isOnExactTestRepo = window.location.pathname === "/";

    if (!isInIframe && !isOnExactTestRepo) {
        window.location.href = "/";
    }
} catch (e) {}
