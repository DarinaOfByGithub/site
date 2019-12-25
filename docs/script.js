var $body = document.body;
var $allMyLiveModal = document.querySelector("#all-my-live-modal");
var $egg = document.querySelector('#egg');
var $audio = document.createElement('audio');

$audio.src = 'assets/draje.mp3';

$egg.addEventListener('click', function(e) {
	e.preventDefault();

    $audio.play();

    var interval = setInterval(function() {
        if($audio.currentTime < 128.6) return;

        clearInterval(interval);
        $allMyLiveModal.classList.remove("hidden");
		$body.classList.add("o-hidden");

        setTimeout(function() {
            $allMyLiveModal.classList.add("hidden");
            $body.classList.remove("o-hidden");
        }, 300);

    }, 10);
});