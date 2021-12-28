import { Component } from 'react';
import { addProvider } from '../../../functions/ProviderApi';

class AddProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      surface: '',
      facade: '',
      price: '',
      level: '',
      numberPiece: '',
      cellar: 0,
      status: 0,
    };
  }

  handleStateChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAppartment = () => {
    if (
      this.state.title
      && this.state.surface
      && this.state.facade
      && this.state.price
      && this.state.level
      && this.state.numberPiece
    ) {
      addProvider({
        title: this.state.title,
        surface: this.state.surface,
        facade: this.state.facade,
        price: this.state.price,
        level: this.state.level,
        cellar: parseInt(this.state.cellar, 10),
        status: parseInt(this.state.status, 10),
        numberPiece: this.state.numberPiece,
        projectId: this.props.projectId,
      }, localStorage.getItem('token'))
        .then((res) => {
          this.setState({
            title: '',
            surface: '',
            facade: '',
            price: '',
            level: '',
            numberPiece: '',
            cellar: 0,
            status: 0,
          });
          this.props.AddnewAppartmentToList(res.data);
          this.props.switchBtnForm();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  render() {
    return (
      <tr className="appartements">
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
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
            type="number"
            value={this.state.price}
            name="price"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
          />
        </td>
        <td> </td>
        <td> </td>
        <td>
          <input
            required
            className="w-100 border-0 bg-light"
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
            <select
              className="select-list"
              name="cellar"
              onChange={(e) => {
                this.handleStateChange(e);
              }}
              value={this.state.cellar}
            >
              <option value="0">Sans</option>
              <option value="1">Avec</option>
            </select>
          </td>
        </td>
        <td>
          {' '}
          <select
            className="select-list"
            name="status"
            onChange={(e) => {
              this.handleStateChange(e);
            }}
            value={this.state.status}
          >
            <option value="0">Disponible </option>
            <option value="1">Réservé</option>
          </select>
          {' '}
        </td>

        <td>
          <button onClick={this.handleAppartment} className="btn btn-success">
            Create
          </button>
        </td>
      </tr>
    );
  }
}

export default AddApartment;
