const loadScript = (callback) => {
  const existingScript = document.getElementById('webriq');

  if (!existingScript) {
    const script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = 'https://forms.webriq.com/js/initForms'; 
    script.id = 'webriq';
    document.body.appendChild(script);
    const headScript = document.getElementsByTagName('script')[0]
    headScript.parentNode.insertBefore(script, headScript)

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default loadScript