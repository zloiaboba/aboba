function switchTheme() {
    var check = document
    .getElementById('theme_css')
    .classList[0] === 'dark';
    var element = document.getElementById('theme_css');
    if (check) {
     element.href = 'Project.css';
     element.classList.remove('dark')
     element.classList.add('Project');
    } else {
     element.href = 'DarkProject.css';
     element.classList.remove('Project')
     element.classList.add('dark');
    }
  }