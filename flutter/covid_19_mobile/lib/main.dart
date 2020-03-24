import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:covid_19_mobile/pages/pages.dart';

void main() {
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  runApp(COVID19Mobile());
}

class COVID19Mobile extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Gateway(),
    );
  }
}

// Determines whether there is a user logged in and either goes to the home page or login page
class Gateway extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LoginPage();
  }
}
