(function () {

    const nav = document.createElement("div");
    nav.id = "velmoraGlobalNav";

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const protectedPages = [
        "messages.html",
        "learn.html",
        "dashboard.html",
        "opportunities.html",
        "people.html",
        "skills-passport.html",
        "practice.html",
        "wallet.html",
        "wallet-detail.html",
        "profile-view.html",
        "profile-edit.html",
        "profile-goal.html",
        "profile.html",
        "account.html",
        "path.html",
        "onboarding.html",
        "mission-professional-communication-1.html",
        "lesson-digital-foundations-1.html",
        "lesson-digital-foundations-2.html",
        "lesson-digital-foundations-3.html",
        "lesson-digital-foundations-4.html",
        "lesson-digital-foundations-5.html",
        "lesson-introduction-to-ai-1.html",
        "lesson-introduction-to-ai-2.html",
        "lesson-introduction-to-ai-3.html",
        "lesson-introduction-to-ai-4.html",
        "lesson-introduction-to-ai-5.html",
        "lesson-introduction-to-ai-6.html",
        "lesson-starting-a-business-1.html",
        "lesson-starting-a-business-2.html",
        "lesson-starting-a-business-3.html",
        "lesson-starting-a-business-4.html",
        "lesson-starting-a-business-5.html",
        "lesson-starting-a-business-6.html"
    ];

    function isLoggedIn() {
        return Boolean(
            localStorage.getItem("velmora_token") ||
            localStorage.getItem("token")
        );
    }

    function buildLoginUrl(target) {
        return "login.html?next=" + encodeURIComponent(target);
    }

    function navigateTo(url) {
        const target = url.split("?")[0];

        if (
            protectedPages.includes(target) &&
            !isLoggedIn()
        ) {
            window.location.href = buildLoginUrl(url);
            return;
        }

        window.location.href = url;
    }

    nav.innerHTML = `
        <nav class="velmora-bottom-nav" aria-label="VELMORA navigation">

            <a href="messages.html"
               data-nav="messages"
               aria-label="Messages">
                <span>◌</span>
                <small>Messages</small>
            </a>

            <a href="learn.html"
               data-nav="learn"
               aria-label="Learn">
                <span>◫</span>
                <small>Learn</small>
            </a>

            <a href="dashboard.html"
               data-nav="home"
               aria-label="Home">
                <span>⌂</span>
                <small>Home</small>
            </a>

            <a href="opportunities.html"
               data-nav="marketplace"
               aria-label="Marketplace">
                <span>◇</span>
                <small>Market</small>
            </a>

            <button
                type="button"
                data-nav="more"
                aria-label="More"
                aria-expanded="false">
                <span>☰</span>
                <small>More</small>
            </button>

        </nav>

        <div
            class="velmora-more-panel"
            id="velmoraMorePanel"
            aria-hidden="true">

            <div class="velmora-more-header">
                <div>
                    <strong>VELMORA</strong>
                    <small>Explore your world</small>
                </div>

                <button
                    type="button"
                    id="closeVelmoraMore"
                    aria-label="Close menu">
                    ×
                </button>
            </div>

            <div class="velmora-more-links">

                <a href="people.html">
                    <span>People</span>
                    <small>Connect with people</small>
                </a>

                <a href="opportunities.html">
                    <span>Opportunities</span>
                    <small>Work, projects and possibilities</small>
                </a>

                <a href="skills-passport.html">
                    <span>Skills Passport</span>
                    <small>Show what you can do</small>
                </a>

                <a href="practice.html">
                    <span>Practice &amp; Proof</span>
                    <small>Practice and build evidence</small>
                </a>

                <a href="wallet.html">
                    <span>Wallet</span>
                    <small>Manage your money</small>
                </a>

                <a href="profile-view.html">
                    <span>Profile</span>
                    <small>Your public presence</small>
                </a>

                <a href="account.html">
                    <span>Account</span>
                    <small>Personal information and security</small>
                </a>

                <a href="account.html">
                    <span>Settings</span>
                    <small>Manage your preferences</small>
                </a>

                <a href="help.html">
                    <span>Help</span>
                    <small>Get support</small>
                </a>

                <button
                    type="button"
                    id="velmoraLogout"
                    class="velmora-logout-link">
                    <span>Log out</span>
                    <small>End this session</small>
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(nav);

    const moreButton =
        nav.querySelector('[data-nav="more"]');

    const morePanel =
        document.getElementById("velmoraMorePanel");

    const closeButton =
        document.getElementById("closeVelmoraMore");

    const logoutButton =
        document.getElementById("velmoraLogout");

    function openMore() {
        if (!morePanel || !moreButton) return;

        morePanel.classList.add("open");
        morePanel.setAttribute("aria-hidden", "false");
        moreButton.setAttribute("aria-expanded", "true");
    }

    function closeMore() {
        if (!morePanel || !moreButton) return;

        morePanel.classList.remove("open");
        morePanel.setAttribute("aria-hidden", "true");
        moreButton.setAttribute("aria-expanded", "false");
    }

    if (moreButton) {
        moreButton.addEventListener("click", function (event) {
            event.stopPropagation();

            if (morePanel.classList.contains("open")) {
                closeMore();
            } else {
                openMore();
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeMore);
    }

    document.addEventListener("click", function (event) {

        if (
            morePanel &&
            morePanel.classList.contains("open") &&
            !morePanel.contains(event.target) &&
            !moreButton.contains(event.target)
        ) {
            closeMore();
        }

    });

    nav.querySelectorAll("a[href]").forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = link.getAttribute("href");

            if (!href) return;

            const target =
                href.split("?")[0];

            if (
                protectedPages.includes(target) &&
                !isLoggedIn()
            ) {
                event.preventDefault();

                navigateTo(href);
                return;
            }

            closeMore();

        });

    });

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("velmora_token");
            localStorage.removeItem("velmora_user");

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "index.html";

        });

    }

    const activeMap = {
        "messages.html": "messages",
        "learn.html": "learn",
        "dashboard.html": "home",
        "opportunities.html": "marketplace"
    };

    const activeNav = activeMap[currentPage];

    if (activeNav) {

        const activeElement =
            nav.querySelector(
                '[data-nav="' + activeNav + '"]'
            );

        if (activeElement) {
            activeElement.classList.add("active");
            activeElement.setAttribute("aria-current", "page");
        }

    }

})();
