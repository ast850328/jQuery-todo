var App = (function() {
	
	function init() {
		$('#btn-addTask').click(add);
		$('#taskContainer').on('click', '.close.btn-delTask', del);
	}

	function add() {
		var task = $('#input-taskName').val();
		var decs = $('#input-taskDecs').val();
		var show = `
				<div class="col-sm-4 taskItem">
					<div class="card">
						<div class="card-block">
							<button type="button" class="close btn-delTask" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
								<h3 class="card-title">${task}</h3>
								<p class="card-text">${decs}</p>
						</div>
					</div>
				</div>`;
			$('#taskContainer').append(show);
	}

	function del() {
		$(this).parent().parent().parent().remove();
	}
	return {
		init: init
	}
})();