let sid
      let sname
      function display(){
        sid = document.getElementById('sid').value
        sname = document.getElementById('sname').value
        document.getElementById('output').innerHTML = sid + ' ' + sname 
        document.getElementById('sid').value=''
        document.getElementById('sname').value=''
      }