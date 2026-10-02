(function () {

    const nav = document.createElement("div");

    nav.id = "velmoraGlobalNav";

    nav.innerHTML = `
        <nav class="velmora-bottom-nav">

            <a href="messages.html" data-nav="messages">
                <span>◌</span>
                <small>Messages</small>
            </a>

            <a href="learn.html" data-nav="learn">
                <span>◫</span>
                <small>Learn</small>
            </a>

            <a href="dashboard.html" data-nav="home">
                <span>⌂</span>
                <small>Home</small>
            </a>

            <a href="opportunities.html" data-nav="marketplace">
                <span>◇</span>
                <small>Market</small>
            </a>

            <button type="button" data-nav="more">
                <span>☰</span>
                <small>More</small>
            </button>

        </nav>

        <div class="velmora-more-panel" id="velmoraMorePanel">

            <div class="velmora-more-header">
                <strong>VELMORA</strong>
                <button type="button" id="closeVelmoraMore">×</button>
            </div>

            <a href="people.html">People</a>
            <a href="opportunities.html">Opportunities</a>
            <a href="skills-passport.html">Skills Passport</a>
            <a href="practice-proof.html">Practice &amp; Proof</a>
            <a href="wallet.html">Wallet</a>
            <a href="profile-view.html">Profile</a>
            <a href="account.html">Account</a>
            <a href="account.html">Settings</a>
            <a href="help.html">Help</a>

        </div>
    `;

    document.body.appendChild(nav);

    const moreButton = nav.querySelector('[data-nav="more"]');
    const morePanel = document.getElementById("velmoraMorePanel");
    const closeButton = document.getElementById("closeVelmoraMore");

    if (moreButton && morePanel) {
        moreButton.addEventListener("click", function () {
            morePanel.classList.toggle("open");
        });
    }

    if (closeButton && morePanel) {
        closeButton.addEventListener("click", function () {
            morePanel.classList.remove("open");
        });
    }

})();
