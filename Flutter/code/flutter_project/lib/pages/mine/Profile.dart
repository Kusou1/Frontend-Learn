import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/UserProvider.dart';
import 'package:image_picker/image_picker.dart';
import 'dart:io';
import '../../utils/Global.dart';

class Profile extends StatefulWidget {
  Profile({Key key}) : super(key: key);

  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  final picker = ImagePicker();
  File _image;

  bool _isEditable = false;
  String _initText = "";
  TextEditingController _editingController;

@override
void initState() { 
  super.initState();
  // _initText = userProvider.userInfo['userName'];
  _initText = G.getCurrentContext().watch<UserProvider>().userInfo['userName'];
  _editingController = TextEditingController(text: _initText);
}

  // 拍照获取图片
  Future _takePhoto() async {
    final pickedFile = await picker.getImage(source: ImageSource.camera);

    setState(() {
      if (pickedFile != null) {
        _image = File(pickedFile.path);
      } else {
        print('No Image');
      }
    });
  }

  // 在相册中选取一张图片
  Future _openGallery() async {
    final pickedFile = await picker.getImage(source: ImageSource.gallery);

    setState(() {
      if (pickedFile != null) {
        _image = File(pickedFile.path);
      } else {
        print('No Image');
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    UserProvider userProvider = Provider.of<UserProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: Text('个人资料'),
        centerTitle: true,
      ),
      body:  Container(
        child: Column(
          children: [
            ListTile(
              title: Text('头像'),
              trailing: _image == null
                ?
                  userProvider.userInfo['portrait'] == null
                  ?
                  Icon(
                    Icons.supervised_user_circle_rounded,
                    size: 50
                  )
                  :
                  Image.network(
                    userProvider.userInfo['portrait'],
                    fit: BoxFit.cover
                  )
                :
                Image.file(_image),
                onTap: () {
                  showModalBottomSheet(
                    context: context, 
                    builder: (BuildContext context) {
                      return renderBottomSheet(context);
                    }
                  );
                },
            ),
            ListTile(
              title: Text('昵称'),
              trailing: renderUserName(),
            ),
          ],
        ),
      ),
    );
  }

  Widget renderBottomSheet(BuildContext context) {
    return Container(
      height: 160,
      child: Column(
        children: [
          InkWell(
            onTap: () {
              _takePhoto();
              G.router.pop(context);
            },
            child: Container(
              child: Text('拍照'),
              height: 50,
              alignment: Alignment.center,
            )
          ),
          InkWell(
            onTap: () {
              _openGallery();
              G.router.pop(context);
            },
            child: Container(
              child: Text('从相册中选取'),
              height: 50,
              alignment: Alignment.center,
            )
          ),
          Container(
            color: Colors.grey[200],
            height: 10,
          ),
          InkWell(
            onTap: () {
              G.router.pop(context);
            },
            child: Container(
              child: Text('取消'),
              height: 50,
              alignment: Alignment.center,
            )
          )
        ],
      )
    );
  }

  Widget renderUserName() {
    if (_isEditable) {
      // 展示表单
      return Container(
        width: 60,
        child: TextField(
          controller: _editingController,
          autofocus: true,
          onSubmitted: (value) {
            setState(() {
              _initText = value;
              print(_initText);
              _isEditable = false;
            });
          },
        )
      );
    } else {
      // 展示文本
      return InkWell(
        onTap: () {
          setState(() {
            _isEditable = true;
          });
        },
        child: Text(
          _initText,
          style: TextStyle(
            fontSize: 18
          )
        )
      );
    }
  }

  @override
  void dispose() {
    super.dispose();
  }
}