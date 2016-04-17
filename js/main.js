'use strict';
$(function () {
    $('a:not(.title)').smoothScroll();

    var minimized = 20,
        slideSpeed = 40,
        vCardShown = false;

    function switchTitle (title) {
        var newTitle;

        if ($(title).text().charAt(0) === '▼') {
            $(title).data('original', $(title).text());
            newTitle = '▲ скрыть';
        }
        else {
            newTitle = $(title).data('original');
        }
        setTimeout(function () {
            $(title).text(newTitle);
        }, slideSpeed);
    }

    $('.dropdown a.title').click(function () {
        $(this).siblings('.contents').slideToggle(slideSpeed, switchTitle(this));
    });

    function activate (type, elem) {
        $(elem).addClass('active').siblings('.' + type).removeClass('active');
    }

    function deUnderlineTab (tab) {
        $(tab).children('span').removeClass('dashed');
        $(tab).siblings('.tab').children('span').addClass('dashed');
    }

    function noTabbedIsActive (tab) {
        return !Boolean($(tab).siblings('.tabbed').hasClass('active'));
    }

    $('.tab').click(function () {
        deUnderlineTab(this);
        activate('tab', this);
        var $tabbed = $('#tabbed-' + this.id.slice(4)),
            firstActivation = noTabbedIsActive(this);

        if (firstActivation) {
            var newHeight = $(this).parent().height() + $tabbed.height();

            $(this).parent().height(newHeight);
        }
        activate('tabbed', $tabbed);
    });

    $('.interval').click(function () {
        $(this).hide().siblings('.minimized').slideDown(slideSpeed);
    });

    function showVCardPanel (event) {
        if (!vCardShown) {
            $(event.currentTarget).find('.panel').animate({
                bottom: 0
            }, 300);
        }
    }

    function hideVCardPanel (event) {
        if (!vCardShown) {
            var $panel = $(event.currentTarget).find('.panel');

            $panel.animate({
                bottom: -$panel.height()
            }, 300);
        }
    }

    function showVCard () {
        if (!vCardShown) {
            $('#vcard').animate({
                top: 0
            }, 300);
            hideVCardPanel({
                currentTarget: $('#photo')[0]
            });
            vCardShown = true;
        }
    }

    function hideVCard (event) {
        if (!$('#photo').has(event.target).length && vCardShown) {
            var $vCard = $('#vcard');

            $vCard.animate({
                top: $vCard.height()
            });
            vCardShown = false;
        }
    }

    $('#photo').mouseenter(showVCardPanel).mouseleave(hideVCardPanel);

    $('.show-vcard').click(showVCard);
    $('body').click(hideVCard);
});

// Google +1 button
window.___gcfg = { lang: 'ru' };
(function() {
    var po = document.createElement('script');

    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();

// Google analytics
var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-34499096-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');

    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

// Yandex.Metrika
(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter4350271 = new Ya.Metrika({
                id: 4350271,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        }
        catch(e) {}
    });
    var n = d.getElementsByTagName('script')[0],
        s = d.createElement('script'),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };

    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://mc.yandex.ru/metrika/watch.js';
    if (w.opera === '[object Opera]') {
        d.addEventListener('DOMContentLoaded', f, false);
    }
    else {
        f();
    }
})(document, window, 'yandex_metrika_callbacks');
