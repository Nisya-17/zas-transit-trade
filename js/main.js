document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  const logo = document.querySelector('.brand-logo');
  if (logo) {
    logo.addEventListener('load', () => {
      logo.hidden = false;
    });
    logo.addEventListener('error', () => {
      logo.hidden = true;
    });
    fetch(logo.dataset.src, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) logo.src = logo.dataset.src;
      })
      .catch(() => {});
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const serviceField = document.querySelector('#service');
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (serviceField && requestedService) {
    const matchingOption = Array.from(serviceField.options).find(
      (option) => option.value.toLowerCase() === requestedService.toLowerCase(),
    );
    if (matchingOption) serviceField.value = matchingOption.value;
  }

  const form = document.querySelector('#quote-form');
  if (!form) return;

  const status = document.querySelector('#form-status');
  const attachment = document.querySelector('#attachment');
  const attachmentNotice = document.querySelector('#attachment-notice');

  const showAttachmentNotice = () => {
    const hasFile = attachment.files.length > 0;
    attachmentNotice.hidden = !hasFile;
    return hasFile;
  };

  attachment.addEventListener('change', showAttachmentNotice);

  const makeMessage = () => {
    const values = new FormData(form);
    return [
      'Bonjour ZAS TRANSIT & TRADE, je souhaite demander un devis.',
      '',
      `Nom : ${values.get('name')}`,
      `Téléphone / WhatsApp : ${values.get('phone')}`,
      `E-mail : ${values.get('email')}`,
      `Produit ou service : ${values.get('service')}`,
      `Quantité : ${values.get('quantity')}`,
      `Pays d'origine : ${values.get('origin')}`,
      `Destination : ${values.get('destination')}`,
      '',
      `Message : ${values.get('message')}`,
    ].join('\n');
  };

  const validateForm = () => {
    const whitespaceOnly = Array.from(form.querySelectorAll('[required]')).find(
      (field) => typeof field.value === 'string' && !field.value.trim(),
    );

    if (whitespaceOnly) {
      whitespaceOnly.setCustomValidity('Veuillez renseigner ce champ.');
      whitespaceOnly.reportValidity();
      whitespaceOnly.addEventListener('input', () => whitespaceOnly.setCustomValidity(''), { once: true });
      return false;
    }

    form.querySelectorAll('[required]').forEach((field) => field.setCustomValidity(''));
    if (!form.reportValidity()) return false;
    return true;
  };

  form.addEventListener('submit', (event) => event.preventDefault());

  form.querySelectorAll('[data-send-via]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!validateForm()) {
        status.textContent = 'Vérifiez les champs indiqués avant de continuer.';
        return;
      }

      const hasFile = showAttachmentNotice();
      status.textContent = hasFile
        ? 'Le fichier ne sera pas joint automatiquement. Envoyez votre demande, puis ajoutez le document manuellement.'
        : 'Votre application va s’ouvrir avec la demande préremplie. Vérifiez-la avant de l’envoyer.';

      const message = makeMessage();
      if (button.dataset.sendVia === 'whatsapp') {
        window.open(`https://wa.me/237697508231?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      } else {
        const subject = encodeURIComponent('Demande de devis - ZAS TRANSIT & TRADE');
        window.location.href = `mailto:schelemia.zas@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
      }
    });
  });
});
