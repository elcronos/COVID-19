import 'package:flutter/material.dart';

import 'package:covid_19_mobile/pages/pages.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            Align(
              alignment: Alignment.topCenter,
              child: Padding(
                padding: const EdgeInsets.only(top: 30.0),
                child: Column(
                  children: <Widget>[
                    Center(
                      child: Text(
                        'Welcome to',
                        style: TextStyle(
                          fontSize: 24.0,
                        ),
                      ),
                    ),
                    Center(
                        child: Text(
                      'COVID-19 AI Diagnosis',
                      style: TextStyle(
                        fontSize: 24.0,
                      ),
                    )),
                  ],
                ),
              ),
            ),
            Center(
              child: MaterialButton(
                color: Colors.blue,
                child: Text('Sign in with Google'),
                onPressed: () {
                  Navigator.pushReplacement(context,
                      MaterialPageRoute(builder: (context) => HomePage()));
                },
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.only(bottom: 20.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    MaterialButton(
                      child: Text('DISCLAIMER'),
                      onPressed: () {},
                    ),
                    MaterialButton(
                      child: Text('TERMS & CONDITIONS'),
                      onPressed: () {},
                    ),
                    MaterialButton(
                      child: Text('ABOUT'),
                      onPressed: () {},
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
