import React from 'react';
import Notification from './Notification';

const reserveNotifications = [
  {
    message: '안녕하세요 오늘 일정입니다.',
  },
  {
    message: '일어날 시간입니다.',
  },
  {
    message: '점심 식사 시간입니다.',
  },
  {
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

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
