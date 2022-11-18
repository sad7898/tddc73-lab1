import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ButtonPairGroup extends StatelessWidget {
  const ButtonPairGroup({super.key, required this.buttons});
  final List<Widget> buttons;
  // This widget is the root of your application.

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 350),
        child: GridView.count(
          shrinkWrap: true,
          childAspectRatio: 3,
          padding: const EdgeInsets.all(20),
          crossAxisCount: 2,
          mainAxisSpacing: 10,
          crossAxisSpacing: 100,
          children: buttons,
        ));
  }
}
