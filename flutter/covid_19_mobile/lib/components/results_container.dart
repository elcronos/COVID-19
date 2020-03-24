import 'package:flutter/material.dart';

class ResultsContainer extends StatelessWidget {
  final Image xray;
  final bool isPositive;
  final double accuracy;

  ResultsContainer({this.xray, this.isPositive, this.accuracy});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 400.0,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: Colors.black12,
        borderRadius: BorderRadius.circular(40.0),
      ),
      child: Center(
        child: Text('Diagnosis results will appear here.'),
      ),
    );
  }
}
