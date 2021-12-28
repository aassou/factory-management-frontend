import { Component } from 'react';
import { updateApartment } from '../../../functions/ApartmentApi';
import ReserveForCard from './ReserveForCard';
import SoldToCard from './SoldToCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      surface: '',
      priceDeclare: '',
      advancerPriceDeclare: '',
      surface2: '',
      facade: '',
      price: '',
      montantRevente: '',
      level: '',
      numberPiece: '',
      forClient: '',
      cellar: 1,
      status: 1,
      apprt: {},
      showForm: false,
    };
  }

  componentDidMount() {
    this.setState(this.props.appartement);
    this.setState({
      apprt: this.props.appartement,
    });
  }

  handleStateChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  UpdateStatus = () => {
    if (this.state.status !== 2) {
      const newstatus = parseInt(this.state.status) === 0 ? 1 : 0;
      const token = localStorage.getItem('token');
      const { id } = this.props.appartement;
      let data = { status: newstatus };
      if (newstatus === 0) {
        data = { status: newstatus, forClient: '' };
        const { apprt } = this.state;
        apprt.forClient = '';
        this.setState({ apprt });
        this.setState({ forClient: '' });
      }
      updateApartment(data, id, token)
        .then(() => {
          this.setState({ status: newstatus });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  UpdateCellar = () => {
    const newcellar = parseInt(this.state.cellar) === 0 ? 1 : 0;
    const token = localStorage.getItem('token');
    const { id } = this.props.appartement;
    updateApartment({ cellar: newcellar }, id, token)
      .then(() => {
        this.setState({ cellar: newcellar });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ActiveDesactiveClassName = (int) => {
    const res = parseInt(int, 10) === 1
      ? 'bg-light-blue btn text-white'
      : 'bg-secondary bg-gradient btn text-white';
    return res;
  };

  onBlur = (e) => {
    const token = localStorage.getItem('token');
    const { id } = this.props.appartement;
    e.target.parentNode.classList.remove('alert-danger');
    e.target.classList.remove('alert-danger');
    e.target.classList.remove('bg-light');
    if (
      this.state[e.target.name] !== this.state.apprt[e.target.name]
      && this.state[e.target.name]
    ) {
      const data = {
        [e.target.name]: this.state[e.target.name],
      };
      updateApartment(data, id, token)
        .then((res) => {
          this.setState({
            apprt: res.data,
          });
          console.log(res.data);
        })
        .catch((err) => {
          e.target.parentNode.className = 'alert-danger';
          e.target.className = 'alert-danger';
          console.log(err.response);
        });
    } else if (!this.state[e.target.name]) {
      e.target.parentNode.classList.add('alert-danger');
      e.target.classList.remove('bg-light');
      e.target.classList.add('alert-danger');
    }
  };

  // status 0: disponible
  // status 1: Reserved
  // status 2: Sold
  StatusBtn = () => {
    switch (this.state.status) {
      case 1:
        return (
          <button
            onClick={this.UpdateStatus}
            className="bg-danger btn text-white"
          >
            Reserve
          </button>
        );
      case 2:
        return (
          <button
            onClick={this.UpdateStatus}
            className="bg-success btn text-white"
          >
            Vendu
          </button>
        );
      default:
        return (
          <button
            onClick={this.UpdateStatus}
            className="bg-primary btn text-white"
          >
            Disponible
          </button>
        );
    }
  };

  displayForm = (status) => {
    if (this.state.showForm) {
      if (status === 1) {
        return (
          <ReserveForCard
            onBlur={this.onBlur}
            handleStateChange={this.handleStateChange}
            oldName={this.state.apprt.forClient}
            reservedFor={this.state.forClient}
            closeForm={() => {
              this.setState({ showForm: false });
            }}
          />
        );
      }
      return (
        <SoldToCard
          price={this.state.price}
          closeForm={() => {
            this.setState({ showForm: false });
          }}
          client={this.state.forClient}
        />
      );
    }
  };

  renderAction = (status) => {
    if (status !== 0) {
      return (
        <button
          onClick={() => {
            this.setState({ showForm: true });
          }}
          className="bg-primary btn text-light"
        >
          <i className="fa fa-users" />
          {' '}
        </button>
      );
    }
  };

  render() {
    return (
      <tr className="appartements">
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="text"
            value={this.state.title}
            name="title"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="number"
            value={this.state.surface}
            name="surface"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="number"
            value={this.state.price}
            name="price"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="number"
            value={this.state.priceDeclare}
            name="priceDeclare"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="number"
            value={this.state.advancerPriceDeclare}
            name="advancerPriceDeclare"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="text"
            value={this.state.level}
            name="level"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="text"
            value={this.state.facade}
            name="facade"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
            onBlur={(e) => {
              this.onBlur(e);
            }}
            type="text"
            value={this.state.numberPiece}
            name="numberPiece"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td>
          <td>
            <button
              onClick={this.UpdateCellar}
              className={this.ActiveDesactiveClassName(this.state.cellar)}
            >
              {parseInt(this.state.cellar) === 0 ? 'Sans' : 'Avec'}
            </button>
          </td>
        </td>
        <td>{this.StatusBtn()}</td>

        <td>
          {this.renderAction(this.state.status)}
          {this.displayForm(this.state.status)}
        </td>
      </tr>
    );
  }
}

export default Card;
