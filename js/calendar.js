const calendar = {
  monthNum: document.querySelector('.month-num'),
  monthString: document.querySelector('.month-string'),
  days: document.querySelector('#days'),
  date: new Date(),
  todayDate: new Date(), // local의 오늘 날짜를 저장 

  init(options){
    this.options = options
    this.date.setDate(1)  // setDate(dayValue): 현재 설정된 월의 시작을 기준으로 Date 객체의 날짜를 설정 
    this.createMonth()
  },

  // 달력 날짜 생성함수 (1부터 한달 숫자만들기)
  createDay(num, day){
    const newDay = document.createElement('li')
    const dateEl = document.createElement('a')
    dateEl.textContent = num

    if (num === 1){
      if (day === 0){
        newDay.style.marginLeft = 'px'
      } else{
        newDay.style.marginLeft = ((day - 1) * 60) + 'px'
      }
    }

    // 오늘 날짜 표시하기 위한 클래스 지정
    if (this.date.toString() === this.todayDate.toString()){
      newDay.classList.add('active') // 현재 날짜 li태그에 active 클래스 추가 
    }

    newDay.appendChild(dateEl)
    days.appendChild(newDay)
  },

  // Month 생성함수 
  createMonth(){
  /* 
   * monthNum = 8
   * monthString = 'August' 
   */
    const currentMonth = this.date.getMonth() // getMonth(): 월을 반환하는 메소드 
    /*
     * getMonth(): 월을 반환하는 메소드 
     * 반환값이 0부터 11까지이므로, 반환값 + 1을 설정해줘야함 
     */
    while (this.date.getMonth() === currentMonth){
      this.createDay(
        this.date.getDate(),
        this.date.getDay(),
        this.date.getFullYear()
      )
      this.date.setDate(this.date.getDate() + 1)
    }

    this.date.setDate(1)
    this.date.setMonth(this.date.getMonth() - 1)

    this.monthNum.innerHTML = this.monthsAsNum(this.date.getMonth())
    this.monthString.innerHTML = this.monthsAsString(this.date.getMonth())
  },

  monthsAsString(monthIndex) {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ][monthIndex]
  },

  monthsAsNum(monthIndex) {
    return [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ] [monthIndex]
  },

  clearCalendar() {
    calendar.days.innerHTML = ''
  }

  
}