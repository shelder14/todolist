$(document).ready(function() {
    $.ajax({
        url: 'https://modx-sample.se7.ru/api/getTasks',
        dataType: "json",
        success: function(response) {
        	console.log(response);
            $('.table').append(
                `<tbody>${response.results.map(n =>
			    `<tr>
			      <td>${n.id}</td>
			      <td>${n.name}</td>
			    </tr>`).join(',')}
			  </tbody>`
			);
			
        }

    });
});
