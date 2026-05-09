const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const idade = document.querySelector("input[type='number']").value;

  // cria área de resultado
  let resultado = document.querySelector(".resultado");

  if (!resultado) {
    resultado = document.createElement("div");
    resultado.classList.add("resultado");
    document.querySelector(".card").appendChild(resultado);
  }

  resultado.innerHTML = `
        <h2>Cadastro realizado com sucesso!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade}</p>
    `;
});
