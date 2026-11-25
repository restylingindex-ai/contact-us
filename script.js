const form = document.getElementById('contactform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Helper to check empty fields
  const check = (id, errid) => {
    const el = document.getElementById(id);
    const err = document.getElementById(errid);
    if (!el.value.trim()) {
      el.parentElement.classList.add('invalid');
      if (err) err.classList.add('show');
      valid = false;
    } else {
      el.parentElement.classList.remove('invalid');
      if (err) err.classList.remove('show');
    }
  };

  // 1. First, Last, Message
  check('firstname', 'errfirst');
  check('lastname', 'errlast');
  check('message', 'errmessage');

  // 2. Email - must have @
  const email = document.getElementById('email');
  const erremail = document.getElementById('erremail');
  if (!email.value.includes('@')) {
    email.parentElement.classList.add('invalid');
    if (erremail) erremail.classList.add('show');
    valid = false;
  } else {
    email.parentElement.classList.remove('invalid');
    if (erremail) erremail.classList.remove('show');
  }

  // 3. Query Type
  if (!document.querySelector('input[name="query"]:checked')) {
    document.getElementById('errquery').classList.add('show');
    valid = false;
  } else {
    document.getElementById('errquery').classList.remove('show');
  }

  // 4. Consent checkbox
  if (!document.getElementById('consent').checked) {
    document.getElementById('errconsent').classList.add('show');
    valid = false;
  } else {
    document.getElementById('errconsent').classList.remove('show');
  }

  // 5. If all good, show success
  if (valid) {
    document.getElementById('successbox').classList.add('show');
    form.reset();
    // Hide success after 3 seconds
    setTimeout(() => {
      document.getElementById('successbox').classList.remove('show');
    }, 3000);
  }
});