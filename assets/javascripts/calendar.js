class Calendar {
  constructor() {
    this.today = new Date();
    this.getActiveDate();
  }

  getActiveDate(year, month, day) {
    const date = new Date(year, month, day);
    this.activeDay =  date.getTime() ? date : this.today;
    this.getActiveDateInfo();
  }

  getActiveDateInfo() {
    this.getDay();
    this.getMonth();
    this.getYear();
    this.daysInMonth();
  }

  getDay() {
    this.day = this.activeDay.getDay();
  }

  getMonth() {
    this.month = this.activeDay.getMonth();
  }

  getYear() {
    this.year = this.activeDay.getFullYear();
  }

  daysInMonth() {
    this.totalDays = new Date(this.year, this.month + 1, 0).getDate();
  }

  isCurrentMonth() {
    if(this.activeDay.getMonth() === this.today.getMonth() &&
    this.activeDay.getFullYear() === this.today.getFullYear()) {
      this.activeDay = this.today;
      this.getActiveDateInfo();
    }
  }

  nextMonth() {
    this.month < 11 ?
      this.getActiveDate(this.year, this.month+=1, 1) :
      this.getActiveDate(this.year+=1, this.month=0, 1);
    this.isCurrentMonth();
  }

  previousMonth() {
    this.month < 0 ?
      this.getActiveDate(this.year-=1, this.month=11, 1) :
      this.getActiveDate(this.year, this.month-=1, 1);
    this.isCurrentMonth();
  }

  renderDayHeader(node) {
    node.innerHTML = calHelper.fullDays[this.day];
  }

  renderDayBody(node) {
    node.innerHTML = this.activeDay.getDate();
  }

  renderMonthHeader(node) {
    node.innerHTML = `${ calHelper.fullMonths[this.month] } ${ this.year }`
  }

  renderMonthBody(node) {
    let table = "<table><tr>";

    for (let i = 0; i < calHelper.fullDays.length; i++){
      table += `<th class="cal__month__body__initial"> ${ calHelper.fullDays[i][0] }</th>`;
    }

    table += "</tr><tr>";

    const monthToRender = new Date(this.year, this.month, 1);
    console.log(monthToRender)
    for(let i = 1 - monthToRender.getDay(); i <= this.totalDays; i++) {
      if(i <= 0) {
        table += '<td></td>'
        continue;
      }
      monthToRender.setDate(i);
      const currentDayPosition = monthToRender.getDay();
      if(currentDayPosition == 6){
        console.log(currentDayPosition, i)
        table += `<td>${i}</td></tr>`;
      }
      else{
        table += `<td>${i}</td>`;
      }
    };

    table += "</tr></table>";
    node.innerHTML = table;
  }
}
