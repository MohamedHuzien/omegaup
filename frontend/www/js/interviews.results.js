$(document).ready(function() {
	var interviewAlias = /\/interview\/([^\/]+)\/result\/([^\/]+)?.*/.exec(window.location.pathname)[1];
	var candidateUsername = /\/interview\/([^\/]+)\/result\/([^\/]+)?.*/.exec(window.location.pathname)[2];

	omegaup.getInterviewStatsForUser(interviewAlias, candidateUsername, function(userStats) {
		console.log(userStats); //remove
		$('.page-header h1 span').html(OmegaUp.T['interviewResultsFor'] + ' ' + userStats.name_or_username);

		var subtitleHtml = 'Interview url : ' + userStats.interview_url;

		$('.page-header h3 small').html(subtitleHtml);

		if (userStats.opened_interview) {
			$('.page-header h1 small').html(OmegaUp.T['interviewNotStarted']);
		} else if (userStats.finished){
			$('.page-header h1 small').html(OmegaUp.T['interviewFinished']);
		} else {
			$('.page-header h1 small').html(OmegaUp.T['interviewInProgress']);
		}
	});
});
