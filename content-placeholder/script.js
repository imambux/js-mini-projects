const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const id = document.getElementById('id');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 500);

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random" alt="Picture" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta!';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/30.jpg" alt="profile"/>';
  id.innerHTML = 'John Doe';
  date.innerHTML = '9 Jan, 1992';

  animated_bgs.forEach(animatedBg =>
    animatedBg.classList.remove('animated-bg')
  );
  animated_bg_texts.forEach(animatedBgText =>
    animatedBgText.classList.remove('animated-bg-text')
  );
}
