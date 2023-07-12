import React from 'react';
import Notification from './Notification';

const reserveNotifications = [
  {
    id: 1,
    message: '안녕하세요 오늘 일정입니다.',
  },
  {
    id: 2,
    message: '일어날 시간입니다.',
  },
  {
    id: 3,
    message: '점심 식사 시간입니다.',
  },
  {
    id: 4,
    message: '저녁 식사 시간입니다.',
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    // 앞으로 사용할 변수 state에서 초기화
    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        const index = notifications.length;
        notifications.push(reserveNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  // 컴포넌트가 제거될 때 타이머 제거
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
