// guarantee start
const guaranteeBtn = document.querySelector('#guarantee-btn');
const guaranteeTooltip = document.querySelector('#guarantee-tltp');

if ($(guaranteeTooltip).length > 0) {
    const guaranteePopper = Popper.createPopper(guaranteeBtn, guaranteeTooltip);

    function guaranteeShow() {
        guaranteeTooltip.setAttribute('data-show', '');

        guaranteePopper.update();
    }

    function guaranteeHide() {
        guaranteeTooltip.removeAttribute('data-show');
    }

    const guaranteeShowEvents = ['mouseenter', 'focus'];
    const guaranteeHideEvents = ['mouseleave', 'blur'];

    guaranteeShowEvents.forEach((event) => {
        guaranteeBtn.addEventListener(event, guaranteeShow);
    });

    guaranteeHideEvents.forEach((event) => {
        guaranteeBtn.addEventListener(event, guaranteeHide);
    });
}

const guaranteeMobileBtn = document.querySelector('#guaranteeMobile-btn');
const guaranteeMobileTooltip = document.querySelector('#guaranteeMobile-tltp');

if ($(guaranteeMobileTooltip).length > 0) {
    const guaranteeMobilePopper = Popper.createPopper(guaranteeMobileBtn, guaranteeMobileTooltip);

    function guaranteeMobileShow() {
        guaranteeMobileTooltip.setAttribute('data-show', '');

        guaranteeMobilePopper.update();
    }

    function guaranteeMobileHide() {
        guaranteeMobileTooltip.removeAttribute('data-show');
    }

    const guaranteeMobileShowEvents = ['mouseenter', 'focus'];
    const guaranteeMobileHideEvents = ['mouseleave', 'blur'];

    guaranteeMobileShowEvents.forEach((event) => {
        guaranteeMobileBtn.addEventListener(event, guaranteeMobileShow);
    });

    guaranteeMobileHideEvents.forEach((event) => {
        guaranteeMobileBtn.addEventListener(event, guaranteeMobileHide);
    });
}
// guarantee end

// payment start
const paymentBtn = document.querySelector('#payment-btn');
const paymentTooltip = document.querySelector('#payment-tltp');

if ($(paymentTooltip).length > 0) {
    const paymentPopper = Popper.createPopper(paymentBtn, paymentTooltip);

    function paymentShow() {
        paymentTooltip.setAttribute('data-show', '');

        paymentPopper.update();
    }

    function paymentHide() {
        paymentTooltip.removeAttribute('data-show');
    }

    const paymentShowEvents = ['mouseenter', 'focus'];
    const paymentHideEvents = ['mouseleave', 'blur'];

    paymentShowEvents.forEach((event) => {
        paymentBtn.addEventListener(event, paymentShow);
    });

    paymentHideEvents.forEach((event) => {
        paymentBtn.addEventListener(event, paymentHide);
    });
}

const paymentMobileBtn = document.querySelector('#paymentMobile-btn');
const paymentMobileTooltip = document.querySelector('#paymentMobile-tltp');

if ($(paymentMobileTooltip).length > 0) {
    const paymentMobilePopper = Popper.createPopper(paymentMobileBtn, paymentMobileTooltip);

    function paymentMobileShow() {
        paymentMobileTooltip.setAttribute('data-show', '');

        paymentMobilePopper.update();
    }

    function paymentMobileHide() {
        paymentMobileTooltip.removeAttribute('data-show');
    }

    const paymentMobileShowEvents = ['mouseenter', 'focus'];
    const paymentMobileHideEvents = ['mouseleave', 'blur'];

    paymentMobileShowEvents.forEach((event) => {
        paymentMobileBtn.addEventListener(event, paymentMobileShow);
    });

    paymentMobileHideEvents.forEach((event) => {
        paymentMobileBtn.addEventListener(event, paymentMobileHide);
    });
}
// payment end