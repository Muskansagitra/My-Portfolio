const progressBar=[
    {id:"progress-bar1",progress:0,target:90,speed:200,increment:10},
    {id:"progress-bar2",progress:0,target:70,speed:200,increment:5},
    {id:"progress-bar3",progress:0,target:85,speed:200,increment:10},
    {id:"progress-bar4",progress:0,target:80,speed:200,increment:15},
    {id:"progress-bar5",progress:0,target:60,speed:200,increment:5},
    {id:"progress-bar6",progress:0,target:70,speed:200,increment:15}

    ]
    function updateBars(bar){
    const interval=setInterval(()=>{
    if(bar.progress<bar.target){
        bar.progress+=bar.increment;
        if(bar.progress>bar.target) bar.progress=bar.target;
         const progressBarElement=document.getElementById(bar.id);
         progressBarElement.style.width=bar.progress+"%";
         progressBarElement.textContent=bar.progress+"%";
    }else{
    clearInterval(interval);
    console.log(`${bar.id}reached ${bar.target}% is complete!`);
    }
    },bar.speed)
    }
    progressBar.forEach(updateBars)





    const filters = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');
    
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-category');
        projects.forEach(project => {
          if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
    // background#####

    document.documentElement.style.setProperty('--animate-duration', '2s');


    const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      navItems.forEach(el => el.classList.remove("active"));
      // Add active class to the clicked item
      item.classList.add("active");
    });
  });