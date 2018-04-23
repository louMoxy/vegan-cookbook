import React from "react";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        thanks: false
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({'thanks': 'Thanks for getting in contact.'}))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="contactForm">
        <p>{this.state.thanks}</p>
        <div hidden={(this.state.thanks ? true : false)}>
            <h3>Get in touch</h3>
            <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
                <label hidden>
                Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                </label>
                <label>
                Email:<br />
                <input type="email" name="email" onChange={this.handleChange}/>
                </label>
                <label>
                Message:<br />
                <textarea name="message" onChange={this.handleChange}/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    );
  }
}