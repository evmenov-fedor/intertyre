$(function() {
	
	$.fn.serializeObject = function()
	{
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
					if (o[this.name] !== undefined) {
							if (!o[this.name].push) {
									o[this.name] = [o[this.name]];
							}
							o[this.name].push(this.value || '');
					} else {
							o[this.name] = this.value || '';
					}
			});
			return o;
	};
	
	var displayMessage = function(divid)
	{
		$('#overlay').css('display', 'block');
		$('#overlay').fadeTo(250, 0.8);
		divid = '#' + divid;
		var top = $('body').scrollTop();
		if (!top) top = $('html').scrollTop();
		top += $(window).height() / 2;
		top -= $(divid).height() / 2;
		top -= 50;
		var left = $(window).width() / 2;
		left -= $(divid).width() / 2;
		$(divid).css('top', top);
		$(divid).css('left', left);
		$(divid).css('display', 'block');
		//setTimeout("$('#msg').css('display', 'none');", 3000);
	}
	
	var hideMessage = function()
	{
		$('#overlay').fadeTo(500, 0, function(){
			$('#overlay').css('display', 'none');
		});
		$('#msg').css('display', 'none');
		$('#msg-delete').css('display', 'none');
		$('#msg-pay').css('display', 'none');
	}

	var showMessage = function(msg)
	{
		$('#msg').html(msg);
		displayMessage('msg');
	}

	var showMessageDelete = function(formid)
	{
		$('#deleteform').attr('action', $('#' + formid).attr('action'));
		$('#id-delete').val($('#' + formid + '-id').val());
		$('#wb-delete').val($('#' + formid + '-wb').val());
		displayMessage('msg-delete');
	}

	var showMessagePay = function(formid, notact)
	{
		$('#payform').attr('action', $('#' + formid).attr('action'));
		$('#id-pay').val($('#' + formid + '-id').val());
		$('#wb-pay').val($('#' + formid + '-wb').val());
		$('#msg-pay p strong span').text($('#' + formid + '-paysum').val());
		if (notact) sendForm('payform');
		else displayMessage('msg-pay');
	}

	var sendFormSuccess = function(data) 
	{
		//alert(data['js']);
		$('#' + data['form'] + ' input').removeClass('error');
		$('#' + data['form'] + ' textarea').removeClass('error');
		$('#' + data['form'] + ' .note').html('');		
		//alert(data['errors']);
		if (data['errors'])
		{
			for (var id in data['errors'])
			{
				$('#' + data['form'] + '-' + id).addClass('error');
				$('#' + data['form'] + '-' + id + '-note').html(data['errors'][id]);
			}
		}
		if (data['msg']) showMessage(data['msg']);
		if (data['js']) eval(data['js']);
	//	data = jQuery.parseJSON(jqXHR.responseText);
		
	}
	
	var sendFormComplete = function(jqXHR, exception) 
	{
		alert(jqXHR.status + ' ' + exception + ' ' + jqXHR.responseText);
	}
	
	var sendForm = function(formid)
	{
		$.ajax({
			url: $('#' + formid).attr('action'),
			type: "POST",
			data: $('#' + formid).serializeObject(),
			success: sendFormSuccess,
	//		complete: sendFormComplete,
			dataType: 'json'
		});
		return false;
	}

	$(document).on('click', '.form-submit', function()
	{
		var formid = $(this).attr('id').replace('-submit', '');
		return sendForm(formid);
	});
	
	$('.form-delete').click(function(){
		var formid = $(this).attr('id').replace('-delete', '');
		showMessageDelete(formid);
		return false;
	});
	
	$('.form-pay').click(function(){
		var formid = $(this).attr('id').replace('-pay', '');
		showMessagePay(formid, $(this).hasClass('not-act'));
		return false;
	});

	$('.check-delete').click(function(){
		if ($('#word-delete').val() == 'NOTSEO') 
		{
			hideMessage();
			$('#word-delete').val('')
			sendForm('deleteform');
		}
		else 
		{
			$('#word-delete').addClass('error');
			$('#word-delete-note').html("Вы неверно ввели проверочное слово.");
		}
		return false;
	});
	
	$('.check-pay').click(function(){
		hideMessage();
		sendForm('payform');
		return false;
	});
	
	$('.hide-message').click(function(){
		hideMessage();
	});

});

	var loadHtml = function(divid, url)
	{
			$.ajax({
				url: url,
				type: "GET",
				success: function(data){
					//alert(divid);
					$('#' + divid).html(data);
				},
				/*
				complete: function(jqXHR, exception, divid) 
				{
					alert(jqXHR.status + ' ' + exception + ' ' + jqXHR.responseText + ' ' + divid);
				},
				*/
				dataType: 'html'
			});
			return false;
	}
