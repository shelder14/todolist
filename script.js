$(document).ready(function() {
    $.ajax({
        url: 'https://modx-sample.se7.ru/api/getTasks',
        dataType: "json",
        success: function(response) {
        	console.log(response);
            $('.table').append(
                `<tbody>${response.results.map(function(n){
			    return `<tr class="tr" data-tr="${n.id}">
                    <td class="id">${n.id}</td>
                    <td class="name">${n.name}</td>
                    <td class="autor">${n.author}</td>
                    <td><span class="del" data-del="${n.id}">x</span></td> 
                    <td class="edit-block"><span class="edit" data-edit="${n.id}">+</span></td>                     
			    </tr>`;
			}).join(',')}
			  </tbody>`
			);
			
        }

    });
    $('body').on("click", ".del", function(){
        let delid = $(this).attr('data-del');
        $(`.tr[data-tr=${delid}]`).hide();
    });
    $('body').on("click", ".edit", function(){
        let editid = $(this).attr('data-edit');
        let nametext = $(`.tr[data-tr=${editid}] .name`).text();
        let idtext = $(`.tr[data-tr=${editid}] .id`).text();
        let authortext = $(`.tr[data-tr=${editid}] .author`).text();
        $(`.tr[data-tr=${editid}] .name`).html(`<input name='name' value="${nametext}">`);
        $(`.tr[data-tr=${editid}] .id`).html(`<input name='id' value="${idtext}">`);
        $(`.tr[data-tr=${editid}] .author`).html(`<input name='author' value="${authortext}">`);
        $(`.tr[data-tr=${editid}] .edit-block`).html(`<span class="save" data-save="${editid}">✓</span>`);
        
    }); 
    $('body').on("click", ".save", function(){
        let editid = $(this).attr('data-save');
        let nameinput= $(`.tr[data-tr=${editid}] input[name='name']`).val();
        let idinput= $(`.tr[data-tr=${editid}] input[name='id']`).val();
        let authorinput= $(`.tr[data-tr=${editid}] input[name='author']`).val();
        $(`.tr[data-tr=${editid}] .name`).html(`${nameinput}`);
        $(`.tr[data-tr=${editid}] .id`).html(`${idinput}`);
        $(`.tr[data-tr=${editid}] .author`).html(`${authorinput}`);
        $(`.tr[data-tr=${editid}] .edit-block`).html(`<span class="edit" data-edit="${editid}">+</span>`);
    });
});
