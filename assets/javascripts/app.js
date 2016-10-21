window.onload = function() {
  const cal = new Calendar();

  function render() {
    cal.renderDayHeader(document.querySelector('.cal__day.header span'));
    cal.renderDayBody(document.querySelector('.cal__day.body span'))
    cal.renderMonthHeader(
      document.querySelector('.cal__month.header span:nth-child(2)')
    );
    document.querySelector('.cal__month.body').innerHTML = '';
    cal.renderMonthBody(document.querySelector('.cal__month.body'))
  }

  document.querySelector('.next').addEventListener('click', function(e) {
    cal.nextMonth();
    render();
  })
  document.querySelector('.prev').addEventListener('click', function(e) {
    cal.previousMonth();
    render();
  })

  render();
}