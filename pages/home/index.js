/**
 * home/index.js
 * 
 * Created by André Luferat → http://www.luferat.net/
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * Controller da página 'home'.
 */

 $(document).ready(runHome);

 // Variável com view dos artigos
 var articles = '';
 
 function runHome() {
 
     // Título da página
     setTitle();
 
     // Monitora eventos de clique nos artigos
     $(document).on('click', '.art-block', viewArticle);
 
     // Lê todos os artigos do banco de dados e armazena na variável 'querySnapshot'
     db.collection('articles')
         .onSnapshot((querySnapshot) => {
 
             // Obtém cada artigo contido em 'querySnapshot' e armazena na variável 'doc'
             querySnapshot.forEach((doc) => {
 
                 // Obtém os campos e valores do documento e armazena na variável 'article'
                 var article = doc.data();
 
                 // Obtém o id documento e armazena em 'article.id'
                 article.id = doc.id;
 
                 // Monta a view da página
                 articles += `
 <div class="art-block" title="${article.title}" data-id="${article.id}">
     <div class="art-block-image" style="background-image: url('${article.image}')"></div>
     <div class="art-block-content">
         <h3>${article.title}</h3>
         <small>${article.resume}</small>
     </div>
 </div>
 `;
 
             });
 
             $('#viewArticles').html(articles);
 
         });
 
 }
 
 // Processa cliques nos artigos
 function viewArticle() {
 
     // Obtém o atributo 'data-id' do elemento clicado
     articleId = sanitizeString($(this).attr('data-id'));
 
     // Exibe o artigo completo
     loadPage(`view?${articleId}`);
 
 }
 
 // Limpa caracteres perigosos das strings
 function sanitizeString(badString, stripHTML = true) {
 
     // Remove espaços em excesso da string
     goodString = badString.trim();
 
     // Retorna a string sanitizada
     return goodString;
 }